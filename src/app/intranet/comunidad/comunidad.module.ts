import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunidadRoutingModule } from './comunidad-routing.module';
import { DescubreComponent } from './descubre/descubre.component';
import { CrearPublicacionComponent } from './mis-publicaciones/crear-publicacion/crear-publicacion.component';
import { PublicacionesComponent } from './publicaciones-general/publicaciones/publicaciones.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    DescubreComponent,
    CrearPublicacionComponent,
    PublicacionesComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    ComunidadRoutingModule
  ],
  exports: [
    
  ]
})
export class ComunidadModule { }
