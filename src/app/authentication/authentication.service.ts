import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageSubject } from 'src/shared/localstorage/localStorageSubject';

interface User{  //poner mismo modelo json que el backend
  nombre: string;
  correo: string;
 
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly authenticatedUser :LocalStorageSubject<User | null> = new LocalStorageSubject<User | null>('AUTH_USER',null);

  constructor(private router: Router) {}
  

  isAuthenticated(){
    return this.authenticatedUser.value !== null;
  }


  async login(email: string, password: string): Promise<void> {
    if (email === 'ernesto@123.com' && password === '1@azxsw2') { //en vez de esto se tiene que importar el servicio usuario y declarar una variable de lista usuarios con todos los usuarios de la bd
      this.authenticatedUser.next({
        nombre: 'Ernesto Castro',
        correo: 'admin',

      })
      console.log('authenticated');
      await this.router.navigate(['/intranet']);
      

    } else {
      console.log('No authenticated');
      this.authenticatedUser.next(null);
 
    }
  }

  async logout(){
    console.log('Logout');
    this.authenticatedUser.next(null);
    await this.router.navigate(['/ingreso']);
  }

}
