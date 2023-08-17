import { Component} from '@angular/core';
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

  statusSearch: 'loading' | 'success' | 'error' | 'init' = 'init';
  errorMesssage = '';

  ngOnInit(){
    this.searchField.valueChanges
    .pipe(debounceTime(300))
    .subscribe((value) =>{
        this.statusSearch = 'loading' 
        this.characterService.getSearch(value)
        .subscribe({
          next: (charactersResponse) => {
           this.characters = charactersResponse.results
           this.statusSearch = 'success'
            if(this.searchField.value.length === 0){
                this.characters = [];
            }
          },
          error: (error) => {
            this.statusSearch = 'error';
            this.errorMesssage = error;
          }
        });
    });
  }
}
