import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom} from 'rxjs';

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
    return lastValueFrom(this.httpClient.post<Usuario[]>("http://localhost:8080/login", user));
  }

  getListUsers(){
    return lastValueFrom(this.httpClient.get<Usuario[]>("http://localhost:8080/usuarios"));
  }
}
