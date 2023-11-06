import { Component, OnInit, inject } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

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
  authenticationService = inject(AuthenticationService)
  passwordv: string = '';
  user: User = {
    name: '',
    email: '',
    password: '',
  };
  
  ngOnInit() {
  }
  signup() {
   
    if (!this.user.name) {
      this.user.name = ''; 
      return; 
    }

    if (!this.user.email || !this.validarCorreo(this.user.email)) {
      this.user.email = ''; 
      return; 
    }

    if (!this.user.password || this.user.password.length < 8 || !this.validarContrasena(this.user.password)) {
      this.user.password = ''; 
      return; 
    }

    if (this.user.password !== this.passwordv) {
      this.passwordv = ''; 
      return; 
    }
    //metodo para agregar al usuario a la base de datos del sistema
    alert('Registro exitoso'+this.user.name+this.user.email) //este mensaje iria en dicho metodo
    this.login()
    
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

  login() {
    console.log('try to login')
    this.authenticationService.login(this.user.email, this.user.password);

  }

}
