import { Component, OnInit, inject } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {UsuarioRegistro} from "../../../@api/users-api.service";

interface User { //poner mismo modelo json que el backend
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  authenticationService= inject(AuthenticationService)
  passwordv: string = '';
  user: UsuarioRegistro = {
    nombre: '',
    correo: '',
    contrasena: '',
  };

  ngOnInit() {
  }
  signup() {

    if (!this.user.nombre) {
      this.user.nombre = '';
      return;
    }

    if (!this.user.correo || !this.validarCorreo(this.user.correo)) {
      this.user.correo = '';
      return;
    }

    if (!this.user.contrasena || this.user.contrasena.length < 8 || !this.validarContrasena(this.user.contrasena)) {
      this.user.contrasena = '';
      this.passwordv = '';
      return;
    }

    if (this.user.contrasena !== this.passwordv) {
      this.passwordv = '';
      this.user.contrasena = '';
      return;
    }
    this.authenticationService.register(this.user)//metodo para agregar al usuario a la base de datos del sistema
    alert('Registro exitoso'+this.user.nombre+this.user.correo) //este mensaje iria en dicho metodo
    this.authenticationService.login(this.user.correo, this.user.contrasena)
  }

  validarCorreo(correo: string): boolean {
    // Utiliza una expresión regular para validar el formato del correo electrónico
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return patron.test(correo);
  }

  validarContrasena(contrasena: string): boolean {
    // Utiliza una expresión regular para validar la contraseña
    const patron = /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return patron.test(contrasena);
  }

  /*login() {
    console.log('try to login')
    this.authenticationService.login(this.user.correo, this.user.contrasena);

  }*/

}
