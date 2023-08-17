import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(
    private characterService: CharacterService,
  ){}

  searchField = new FormControl();
  characters = [];
  errorMesssage = '';

  ngOnInit(){
    this.searchField.valueChanges
    .pipe(debounceTime(300))
    .subscribe((value) =>{
        this.characterService.getSearch(value)
        .subscribe({
          next: (charactersResponse) => {
           this.characters = charactersResponse.results
          },
          error: (error) => {
            this.errorMesssage = error;
          }
        })
    })
  }
}
