import { Component, OnInit } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss']
})
export class ChronologyComponent implements OnInit {

  character;
  entries: Array<any> = [
    {
      age: 14,
      name: "Lyanna Mormont",
      image: "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d3/JonSnowSeason8HB.jpg/revision/latest/scale-to-width-down/333?cb=20190401173347"
    },
    {
      age: 17,
      name: "Jasoon Mormont",
      image: "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d3/JonSnowSeason8HB.jpg/revision/latest/scale-to-width-down/333?cb=20190401173347"
    },
    {
      age: 44,
      name: "Tony Stark",
      image: "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d3/JonSnowSeason8HB.jpg/revision/latest/scale-to-width-down/333?cb=20190401173347"
    },
    {
      age: 29,
      name: "John Snow",
      image: "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d3/JonSnowSeason8HB.jpg/revision/latest/scale-to-width-down/333?cb=20190401173347"
    },
    {
      age: 34,
      name: "Ned Stark",
      image: "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d3/JonSnowSeason8HB.jpg/revision/latest/scale-to-width-down/333?cb=20190401173347"
    },
  ];

  constructor(private chronology: GotServiceService) { }

  ngOnInit(): void {
    this.chronology.getCharacters().subscribe( (item: any) => {
      console.log(item);
      this.character = item;
    });
  }

  // onExpand() {

  // }

}
