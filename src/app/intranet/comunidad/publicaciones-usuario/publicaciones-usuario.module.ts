import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearPublicacionComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PublicacionesUsuarioModule { }
