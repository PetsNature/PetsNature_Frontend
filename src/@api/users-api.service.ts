import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {catchError, lastValueFrom, observeOn, pipe, throwError} from 'rxjs';

export interface Usuario { //poner mismo modelo json que el backend
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
      return lastValueFrom(this.httpClient.post<Usuario[]>("http://localhost:8080/registro",user));
  }

  async loginUser(user: UsuarioLogin){
    return lastValueFrom(this.httpClient.post<Usuario>("http://localhost:8080/login", user).pipe(
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

  private handleError(error: any) {
    if (error.error && error.error.message) {
      // Si el servidor devuelve un objeto con un campo 'message', utiliza ese mensaje
      return throwError(() => new Error(error.error.message));
    } else if (error.status === 401) {
      // Manejar error de autenticación
      return  throwError(() => new Error('Usuario o contrasena no validos'));
    } else if (error.status === 403) {
      // Manejar error de autorización
      return throwError(() => new Error('No tienes permisos para acceder'));
    } else {
      // Manejar otros tipos de errores
      return throwError(() => new Error('Intentalo mas tarde'));
    }
  }
}
