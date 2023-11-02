import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingModule } from '../public/landing/landing.module';
import { IngresoComponent } from './ingreso/ingreso.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    IngresoComponent
  ],
  imports: [
    CommonModule,
    LandingModule,
    AuthenticationRoutingModule,
    FormsModule

  ]
})
export class AuthenticationModule { }
