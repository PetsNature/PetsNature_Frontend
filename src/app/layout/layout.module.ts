import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarGeneralComponent } from './navbar-general/navbar-general.component';
import { FooterGeneralComponent } from './footer-general/footer-general.component';
import { NavbarInicioComponent } from './navbar-inicio/navbar-inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    NavbarGeneralComponent,
    FooterGeneralComponent,
    NavbarInicioComponent,
   
  ],

  exports: [
    NavbarGeneralComponent,
    FooterGeneralComponent,
    NavbarInicioComponent
  ],

  imports: [
    CommonModule,
    RouterLink,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule
    
  ]
})
export class LayoutModule { }
