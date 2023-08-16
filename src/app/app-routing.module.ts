import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { LocationComponent } from './pages/location/location.component';
import { LocationDetailComponent } from './pages/location-detail/location-detail.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { EpisodesDetailComponent } from './pages/episodes-detail/episodes-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
  },
  {
    path:'episode',
    component: EpisodeComponent
  },
  {
    path:'episode/:id',
    component: EpisodesDetailComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
