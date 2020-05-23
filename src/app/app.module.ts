import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './pages/characters/characters.component';
import { HousesComponent } from './pages/houses/houses.component';
// import {ScrollPanelModule} from 'primeng/scrollpanel';
import {CardModule} from 'primeng/card';
import { CharDetailComponent } from './pages/char-detail/char-detail.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CharactersComponent, HousesComponent, CharDetailComponent],
  
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CardModule], 
    // ScrollPanelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}