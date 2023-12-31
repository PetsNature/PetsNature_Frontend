import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunidadRoutingModule } from './comunidad-routing.module';
import { DescubreComponent } from './descubre/descubre.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PublicacionesComunidadModule } from './publicaciones-comunidad/publicaciones-comunidad.module';
import { PublicacionesUsuarioModule } from './publicaciones-usuario/publicaciones-usuario.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DescubreComponent,
    BreadcrumbComponent,

  ],
  imports: [
    CommonModule,
    ComunidadRoutingModule,
    PublicacionesComunidadModule,
    PublicacionesUsuarioModule,
    FormsModule
    
  ],
  exports: [
    
  ]
})
export class ComunidadModule { }
