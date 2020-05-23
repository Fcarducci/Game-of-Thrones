import { Component, OnInit, Input, Output } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Array<any>;
  @Input() character: Array<any>;

  charName: string;

  constructor(private gotService: GotServiceService) {}

  ngOnInit(): void {
    this.gotService.getCharacters().subscribe((characters: any) => {
      this.characters = characters;
    });
  }
}
