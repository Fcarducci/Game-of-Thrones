import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './pages/characters/characters.component';
import { HousesComponent } from './pages/houses/houses.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {CardModule} from 'primeng/card';
import { CharDetailComponent } from './pages/char-detail/char-detail.component';
import {InputTextModule} from 'primeng/inputtext';
import { HouseDetailComponent } from './pages/house-detail/house-detail.component';
import { ChronologyComponent } from './pages/chronology/chronology.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, CharactersComponent, HousesComponent, CharDetailComponent, HouseDetailComponent, ChronologyComponent],
  
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CardModule, ScrollPanelModule, InputTextModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}