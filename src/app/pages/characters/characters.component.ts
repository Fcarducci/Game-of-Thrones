import { Component, OnInit, Input } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Array<any>;
  @Input() character: Array<any>;
  searchChar: string;
  charName: string;
  arraySearch;

  constructor(private gotService: GotServiceService) {}

  ngOnInit(): void {
    this.gotService.getCharacters().subscribe((characters: any) => {
      this.characters = characters;
      console.log(this.characters.length);
    })
    .add(()=> {
      let spinnerBox = document.getElementById("spinnerBox");
      let charactersBox = document.getElementById("charactersBox");

      spinnerBox.style.display = "none";
      charactersBox.style.display = "";
    });
  }

  searchChracters() {
    this.characters = [];

    this.gotService.getCharacters().subscribe((characters: any) => {
      this.characters = characters.filter((item) => {
        let cadena = item.name.toLowerCase();

        if (cadena.indexOf(this.searchChar) != -1) {
          return item;
        }
      });
    });
    this.characters;
  }
}
