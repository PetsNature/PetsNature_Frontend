import { Component, OnInit, inject } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {UsuarioLogin} from "../../../@api/users-api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  m = ''
  authenticationService = inject(AuthenticationService)

  authentication: UsuarioLogin= {
    correo: '',
    contrasena: ''
  }


  ngOnInit() {
  }

  validar(){
    if (!this.authentication.correo || !this.authentication.contrasena ) {
      this.authentication.correo=''
      this.authentication.contrasena=''
      this.m='Por favor, complete todos los campos'

    }   else {
      this.login()
      if(!this.authenticationService.isAuthenticated()){
        this.m='Usuario y/o contraseña no encontrado'
        this.authentication.correo=''
        this.authentication.contrasena=''
      }
    }
  }

  login() {
    console.log('try to login')
    this.authenticationService.login(this.authentication);
  }

}
