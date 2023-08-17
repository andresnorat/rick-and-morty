import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input() characters:Character[] = [];
  filteredItems:Character[] = [];
  currentCategory: string = 'all';  
  opcionSeleccionada: string = '';

  optionFilter = new FormControl();


  filterByCategory() {
    let  filter =  this.optionFilter.value
    this.currentCategory = filter;
    if (filter === 'Human') {
      this.filteredItems = this.characters.filter(item => item.species === filter);
    } else if( filter === "Dead") {
      this.filteredItems = this.characters.filter(item => item.status === filter);
    }else {
      this.filteredItems = this.characters.filter(item => item.gender === filter);
    }
  }
}
