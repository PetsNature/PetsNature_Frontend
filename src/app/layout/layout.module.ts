import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarGeneralComponent } from './navbar-general/navbar-general.component';
import { FooterGeneralComponent } from './footer-general/footer-general.component';
import { NavbarInicioComponent } from './navbar-inicio/navbar-inicio.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HttpClientModule } from '@angular/common/http';




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
    LayoutRoutingModule,
    HttpClientModule
    
  ]
})
export class LayoutModule { }
