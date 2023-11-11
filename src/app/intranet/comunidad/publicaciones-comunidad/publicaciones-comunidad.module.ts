import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionPublicacionesComponent } from './gestion-publicaciones/gestion-publicaciones.component';
import { InfoComponent } from './info/info.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionPublicacionesComponent,
    InfoComponent,
    PreguntasComponent,
    RecomendacionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class PublicacionesComunidadModule { }
