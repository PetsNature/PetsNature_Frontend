import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunidadRoutingModule } from './comunidad-routing.module';
import { DescubreComponent } from './descubre/descubre.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';


@NgModule({
  declarations: [
    DescubreComponent,
    CrearPublicacionComponent,
    PublicacionesComponent
  ],
  imports: [
    CommonModule,
    ComunidadRoutingModule
  ],
  exports: [
    
  ]
})
export class ComunidadModule { }
