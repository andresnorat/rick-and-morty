import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/servies/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  characters = [];

  constructor(
    private characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters()
      .subscribe({
        next: (data) => {
          this.characters = data.results;
        },
        error: (error) => {
          alert('Upp ocurrio un error');
        }
      })
  }
}
