import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearInfoComponent } from './crear-info/crear-info.component';
import { CrearPreguntaComponent } from './crear-pregunta/crear-pregunta.component';
import { CrearRecomendacionComponent } from './crear-recomendacion/crear-recomendacion.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearPublicacionComponent,
    CrearInfoComponent,
    CrearPreguntaComponent,
    CrearRecomendacionComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PublicacionesUsuarioModule { }
