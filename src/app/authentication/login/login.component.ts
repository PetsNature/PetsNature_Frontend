import { Component, OnInit, inject } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  m = ''
  authenticationService = inject(AuthenticationService)

  authentication= {
    email: '',
    password: ''
  }

  
  ngOnInit() {
  }

  validar(){
    if (!this.authentication.email || !this.authentication.password ) {
      this.authentication.email='',
      this.authentication.password=''
      this.m='Por favor, complete todos los campos'

    }   else {
      this.login()
      if(!this.authenticationService.isAuthenticated()){
        this.m='Usuario no encontrado',
        this.authentication.email='',
        this.authentication.password=''
      }
    }
  }

  login() {
    console.log('try to login')
    this.authenticationService.login(this.authentication.email, this.authentication.password);

  }

}
