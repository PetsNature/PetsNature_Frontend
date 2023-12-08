import { Component, OnInit, inject } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {UsuarioLogin} from "../../../@api/users-api.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {throwError} from "rxjs";

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

  async validar() {
    if (!this.authentication.correo || !this.authentication.contrasena) {
      this.authentication.correo = ''
      this.authentication.contrasena = ''
      this.m = 'Por favor, complete todos los campos'

    } else {
      await this.login()
      if (!this.authenticationService.isAuthenticated()) {
        this.authentication.correo = ''
        this.authentication.contrasena = ''
      }
    }
  }

  async login() {
    console.log('try to login')
    await this.authenticationService.login(this.authentication)
      .catch(error=>this.m = 'Usuario y/o contraseña no encontrado')
  }

}
