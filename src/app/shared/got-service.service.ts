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

  getHouses() {
    return this.httpClient.get(environment.url + 'houses');
  }
}
