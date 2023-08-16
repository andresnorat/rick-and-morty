import { Component, Input, } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  showDetailProduct = false;
  @Input()characters: Character[] = [];

  constructor(
  ) {}

  ngOnInit(): void {
  }
}

