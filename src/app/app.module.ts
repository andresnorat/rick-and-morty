import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ImgComponent } from './components/img/img.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { LocationComponent } from './pages/location/location.component';
import { NavComponent } from './components/nav/nav.component';
import { LocationDetailComponent } from './pages/location-detail/location-detail.component';
import { EpisodeComponent } from './pages/episode/episode.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    CharactersComponent,
    ImgComponent,
    CharacterDetailComponent,
    LocationComponent,
    NavComponent,
    LocationDetailComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
