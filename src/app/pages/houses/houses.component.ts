import { Component, OnInit } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
})
export class HousesComponent implements OnInit {
  Houses: Array<any>;
  searchHome: string;

  constructor(
    private gotService: GotServiceService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.gotService.getHouses().subscribe((houses: any) => {
      console.log(houses);
      this.Houses = houses;
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

  searchHouses() {
    this.Houses = [];

    this.gotService.getHouses().subscribe((houses: any) => {
      this.Houses = houses.filter((item) => {
        let cadena = item.name.toLowerCase();

        if (cadena.indexOf(this.searchHome.toLowerCase()) != -1) {
          return item;
        }
      });
    });
    this.Houses;
  }
}
