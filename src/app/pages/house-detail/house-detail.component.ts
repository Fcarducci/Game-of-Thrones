import { Component, OnInit } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss'],
})
export class HouseDetailComponent implements OnInit {
  houseName: string;
  singleHouse;

  constructor(
    private house: GotServiceService,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.nameHouse) {
        this.houseName = params.nameHouse;
      }
    });
  }

  ngOnInit(): void {
    this.house
      .getHouse(this.houseName)
      .subscribe((item: any) => {
        this.singleHouse = item[0];
      })
      .add(() => {
        let spinnerBox = document.getElementById('spinnerBox');
        let houseBox = document.getElementById('houseBox');

        spinnerBox.style.display = 'none';
        houseBox.style.display = '';
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
}
