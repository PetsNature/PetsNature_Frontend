import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetRoutingModule } from './intranet-routing.module';
import { VentanaComponent } from './ventana/ventana.component';
import { InicioComponent } from './inicio.component';
import { LayoutModule } from '../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { DescubreComponent } from './descubre/descubre.component';
import { ComunidadModule } from './comunidad/comunidad.module';



@NgModule({
  declarations: [
    InicioComponent,
    VentanaComponent,
    PublicacionesComponent,
    CrearPublicacionComponent,
    DescubreComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    LayoutModule,
    HttpClientModule,
    ComunidadModule
  ]
})
export class IntranetModule { 
  constructor() {
    console.log('intranet loaded');
  }
}
