import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HousesComponent } from './pages/houses/houses.component';
import { CharDetailComponent } from './pages/char-detail/char-detail.component';
import { HouseDetailComponent } from './pages/house-detail/house-detail.component';
import { ChronologyComponent } from './pages/chronology/chronology.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'characters/:nameChar',
    component: CharDetailComponent,
  },
  {
    path: 'houses',
    component: HousesComponent,
  },
  {
    path: 'houses/:nameHouse',
    component: HouseDetailComponent,
  },
  {
    path: 'chronology',
    component: ChronologyComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
