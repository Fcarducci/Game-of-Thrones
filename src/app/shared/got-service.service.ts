import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GotServiceService {
  constructor(private httpClient: HttpClient) {}

  getCharacters() {
    return this.httpClient.get(environment.url + 'characters');
  }

  getCharacter(name) {
    return this.httpClient.get(environment.utl + 'characters/'+name);
  }

  getHouses() {
    return this.httpClient.get(environment.url + 'houses');
  }
}
