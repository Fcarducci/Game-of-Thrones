import { Component, OnInit, Input } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  Characters: Array<any>;
  @Input() character: Array<any>;
  searchChar: string;
  charName: string;
  arraySearch;

  constructor(
    private gotService: GotServiceService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.gotService
      .getCharacters()
      .subscribe((characters: any) => {
        this.Characters = characters;
        console.log(characters);
      })
      .add(() => {
        let spinnerBox = document.getElementById('spinnerBox');
        let charactersBox = document.getElementById('charactersBox');

        spinnerBox.style.display = 'none';
        charactersBox.style.display = '';
      });
  }

  // Se cambia el idioma a Español
  changeLanguageToSpanish(): void {
    this.translate.use('es');
    console.log('Idioma cambiado al Español');
  }

  // Se cambia el idioma a Inglés
  changeLanguageToEnglish(): void {
    this.translate.use('en');
    console.log('Idioma cambiado al Inglés');
  }

  searchChracters() {
    this.Characters = [];

    this.gotService.getCharacters().subscribe((characters: any) => {
      this.Characters = characters.filter((item) => {
        let cadena = item.name.toLowerCase();

        if (cadena.indexOf(this.searchChar.toLowerCase()) != -1) {
          return item;
        }
      });
    });
    this.Characters;
  }
}
