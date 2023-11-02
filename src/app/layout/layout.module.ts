import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarGeneralComponent } from './navbar-general/navbar-general.component';



@NgModule({
  declarations: [
    NavbarGeneralComponent
  ],

  exports: [
    NavbarGeneralComponent
  ],

  imports: [
    CommonModule
    
  ]
})
export class LayoutModule { }
