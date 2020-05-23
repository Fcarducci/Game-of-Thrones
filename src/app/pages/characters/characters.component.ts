import { Component, OnInit, Input } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Array<any>;
  @Input() character: Array<any>;


  constructor(private gotService:GotServiceService) { }

  ngOnInit(): void {
    this.gotService.getCharacters().subscribe( (characters:any) => {
      console.log(characters);
      this.characters = characters;
    });

  }

  


}
