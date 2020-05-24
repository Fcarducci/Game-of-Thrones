import { Component, OnInit, Input } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.scss'],
})
export class CharDetailComponent implements OnInit {
  charName: string;
  singleChar;

  constructor(
    private character: GotServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.nameChar) {
        this.charName = params.nameChar;
      }
    });
  }

  ngOnInit(): void {
    this.character.getCharacter(this.charName).subscribe((item: any) => {
      this.singleChar = item;
    })
    .add(()=> {
      let spinnerBox = document.getElementById("spinnerBox");
      let charBox = document.getElementById("charBox");

      spinnerBox.style.display = "none";
      charBox.style.display = "";
    });
  }
}
