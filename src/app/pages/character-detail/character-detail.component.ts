import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { switchMap } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {

  characterId: string | null = null;
  character: Character | null = null;
  statusDetailCharacters: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location,
  ) { }



  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.statusDetailCharacters = 'loading'
        this.characterId = params.get('id')
        if(this.characterId){
          return this.characterService.getCharacter(this.characterId)
        }
        return []
      })
    ).subscribe({
      next: (value) => {
        this.statusDetailCharacters = 'success'
        this.character  = value;
      },
      error: () => {
        this.statusDetailCharacters = 'error'
      }
    })
  }


  goToBack(){
    this.location.back();
  }
}
