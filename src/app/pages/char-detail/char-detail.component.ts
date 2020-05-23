import { Component, OnInit, Input } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';

@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.scss']
})
export class CharDetailComponent implements OnInit {

  charName: string;
  name: Array<any>;
  @Input() characterName: Array<any>;


  constructor(private character:GotServiceService) { }

  ngOnInit(): void {
    this.character.getCharacter(this.charName).subscribe( (item:) => {
      this.name = item;
    });
  }

}
