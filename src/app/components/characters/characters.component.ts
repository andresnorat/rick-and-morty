import { Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  statusDetailProduct: 'loading' | 'success' | 'error' | 'init' = 'init';
  showDetailProduct = false;
  @Input()characters: Character[] = [];

  constructor(
  ) {}

  ngOnInit(): void {
  }
}

