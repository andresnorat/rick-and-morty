import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { evironment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiUrl = `${evironment.API_URL}/location`

  constructor(
    private http:HttpClient
  ) {}


  getAllLocation(){
    return this.http.get<{info: {},  results: [],}>(this.apiUrl);
  }

  getLocation(id: string){
    return this.http.get<any>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) =>{
        if(error.status === HttpStatusCode.InternalServerError){
          return throwError('Ups algo esta fallando en el server');
        }
        if(error.status === HttpStatusCode.NotFound){
          return throwError('El personaje no existe');
        }
        if(error.status === HttpStatusCode.Unauthorized){
          return throwError('Ups no tienes autorización para acceder a este personaje');
        }
        return throwError('Ups algo salio mal');
      })
    );
  }
}
