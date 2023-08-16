import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { LocationComponent } from './pages/location/location.component';
import { LocationDetailComponent } from './pages/location-detail/location-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'character/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'location/:id',
    component: LocationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
