import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { FormsModule } from '@angular/forms';
import { MisPublicacionesComponent } from './mis-publicaciones/mis-publicaciones.component';


@NgModule({
  declarations: [
    CrearPublicacionComponent,
    MisPublicacionesComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PublicacionesUsuarioModule { }
