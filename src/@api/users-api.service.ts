import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {catchError, lastValueFrom, observeOn, pipe, throwError} from 'rxjs';

export interface Usuario {
  id: number//poner mismo modelo json que el backend
  nombre: string
  correo: string
  imgPerfil: string
  token: string
}
export interface UsuarioRegistro { //poner mismo modelo json que el backend
  nombre: string
  correo: string
  contrasena: string
}
export interface UsuarioLogin { //poner mismo modelo json que el backend
  correo: string
  contrasena: string
}

@Injectable({
  providedIn: 'root'
})

export class UsersApiService {

  httpClient = inject(HttpClient)

  async registerUser(user:UsuarioRegistro){
      return lastValueFrom(this.httpClient.post<Usuario[]>("http://3.139.97.114/registro",user,{ headers:{'No-Token': 'true' }}));
  }

  async loginUser(user: UsuarioLogin){
    return lastValueFrom(this.httpClient.post<Usuario>("http://localhost:8080/login2", user,{ headers:{'No-Token': 'true' }}).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          return throwError(() => new Error(error.message));
        } else if (error.status === 500) {
          return throwError(() => new Error(error.message));
        } else {
          return throwError(() => new Error("Ocurrio un error desconocido"));
        }
      })
    ));
  }
}
