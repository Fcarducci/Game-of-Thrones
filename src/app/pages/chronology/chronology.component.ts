import { Component, OnInit } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss'],
})
export class ChronologyComponent implements OnInit {
  character: any;
  ageOrder: any;
  arrayCharWithAge: any;
  controller: boolean = true;

  constructor(
    private chronology: GotServiceService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.chronology.getCharacters().subscribe((item: any) => {
      this.character = item;
    });
    this.changeOrder();
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

  changeOrder() {
    this.controller = !this.controller;
    this.arrayCharWithAge = this.character.filter((item) => {
      if (item.age) {
        return Object.keys(item.age).length > 1;
      }
    });

    if (this.controller) {
      this.ageOrder = this.arrayCharWithAge.sort((a, b) => {
        if (a.age.age > b.age.age) return 1;
        if (a.age.age < b.age.age) return -1;
        return 0;
      });
      // for (let item of this.ageOrder) {
      //   console.log(item.age);
      // }
    } else {
      this.ageOrder = this.arrayCharWithAge.sort((a, b) => {
        if (a.age.age < b.age.age) return 1;
        if (a.age.age > b.age.age) return -1;
        return 0;
      });
      // for (let item of this.ageOrder) {
      //   console.log(item.age);
      // }
    }
  }
}
