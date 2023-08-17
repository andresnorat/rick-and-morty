import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { evironment } from 'src/environments/environment';
import { Character } from '../models/character.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = `${evironment.API_URL}/character`

  constructor(
    private http: HttpClient
  ) { }


  getAllCharacters() {
    return this.http.get<any>(this.apiUrl)
  }

  getCharacter(id: string) {
    return this.http.get<Character>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.InternalServerError) {
            return throwError('Ups algo esta fallando en el server');
          }
          if (error.status === HttpStatusCode.NotFound) {
            return throwError('El personaje no existe');
          }
          if (error.status === HttpStatusCode.Unauthorized) {
            return throwError('Ups no tienes autorización para acceder a este personaje');
          }
          return throwError('Ups algo salio mal');
        })
      );
  }


  getSearch(query: string) {
    return this.http.get<any>(`${this.apiUrl}?name=${query}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.InternalServerError) {
            return throwError('Ups algo esta fallando en el server');
          }
          if (error.status === HttpStatusCode.NotFound) {
            return throwError('El personaje no existe');
          }
          return throwError('Ups algo salio mal');
        })
      );
  }
}