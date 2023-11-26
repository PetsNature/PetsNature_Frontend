import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import {UsersApiService} from "../../@api/users-api.service";


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    IngresoComponent,

  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule

  ]
})
export class AuthenticationModule {
  constructor() {
    console.log('AuthenticationModule loaded');
  }
}
