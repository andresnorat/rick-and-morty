import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { evironment } from 'src/environments/environment';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = `${evironment.API_URL}/character`

  constructor(
    private http:HttpClient
  ) {}


  getAllCharacters(){
    return this.http.get<any>(this.apiUrl)
  }
}
