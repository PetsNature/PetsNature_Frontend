import {inject, Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageSubject } from 'src/shared/localstorage/localStorageSubject';
import {UsersApiService, Usuario, UsuarioLogin, UsuarioRegistro} from "../../@api/users-api.service";

interface User{  //poner mismo modelo json que el backend
  nombre: string;
  correo: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  usuario1:Usuario= {
    correo: '',
    imgPerfil: '',
    nombre: '',
    token: ''
  };
  api=inject(UsersApiService)

  readonly authenticatedUser :LocalStorageSubject<Usuario | null> = new LocalStorageSubject<Usuario | null>('AUTH_USER',null);

  constructor(private router: Router) {}


  isAuthenticated(){
    return this.authenticatedUser.value !== null;
  }

  async register(usuario:UsuarioRegistro){
    try {
      await this.api.registerUser(usuario)
    }catch (error){
      alert("Correo ya existe")
      throw error
    }
  }

  async login(usuario:UsuarioLogin): Promise<void> {
    this.usuario1=await this.api.loginUser(usuario)
    this.authenticatedUser.next({
      nombre:this.usuario1.nombre,
      correo:this.usuario1.correo,
      imgPerfil:this.usuario1.imgPerfil,
      token:this.usuario1.token
    })
    console.log('authenticated');
    await this.router.navigate(['/intranet']);
    /*if (email === 'ernesto@123.com' && password === '1@azxsw2') { //en vez de esto se tiene que importar el servicio usuario y declarar una variable de lista usuarios con todos los usuarios de la bd
      this.authenticatedUser.next({
        nombre: 'Ernesto Castro',
        correo: 'admin',

      })
      console.log('authenticated');



    } else {
      console.log('No authenticated');
      this.authenticatedUser.next(null);
    }*/
  }

  async logout(){
    console.log('Logout');
    this.authenticatedUser.next(null);
    await this.router.navigate(['/ingreso']);
  }

}
