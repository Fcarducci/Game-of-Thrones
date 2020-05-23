import { Component, OnInit } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss']
})
export class ChronologyComponent implements OnInit {

  character;

  constructor(private chronology: GotServiceService) { }

  ngOnInit(): void {
    this.chronology.getCharacters().subscribe( (item: any) => {
      console.log(item);
      this.character = item;
    });
  }

}
