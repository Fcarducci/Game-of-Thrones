import { Component, OnInit } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  houses: Array<any>;

  constructor(private gotService:GotServiceService) { }

  ngOnInit(): void {
    this.gotService.getHouses().subscribe((houses: any) => {
      console.log(houses);
      this.houses = houses;
    })
    .add(()=> {
      let spinnerBox = document.getElementById("spinnerBox");
      let housesBox = document.getElementById("housesBox");

      spinnerBox.style.display = "none";
      housesBox.style.display = "";
    });
  }

}
