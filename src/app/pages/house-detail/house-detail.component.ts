import { Component, OnInit } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  houseName: string;
  singleHouse;

  constructor(
    private house: GotServiceService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.params.subscribe( (params) => {
      if(params && params.nameHouse) {
        this.houseName = params.nameHouse;
      }
    })
  }

  ngOnInit(): void {
    this.house.getHouse(this.houseName).subscribe((item: any) => {
      this.singleHouse = item[0];
    })
    .add(()=> {
      let spinnerBox = document.getElementById("spinnerBox");
      let houseBox = document.getElementById("houseBox");

      spinnerBox.style.display = "none";
      houseBox.style.display = "";
    });

  }

}
