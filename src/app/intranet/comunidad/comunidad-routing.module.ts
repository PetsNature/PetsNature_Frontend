import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescubreComponent } from './descubre/descubre.component';
import { CrearPublicacionComponent } from './publicaciones-usuario/crear-publicacion/crear-publicacion.component';
import { GestionPublicacionesComponent } from './publicaciones-comunidad/gestion-publicaciones/gestion-publicaciones.component';
import { MisPublicacionesComponent } from './publicaciones-usuario/mis-publicaciones/mis-publicaciones.component';



const routes: Routes = [
  
    { path: '', component: DescubreComponent, children: [
      {path: '', component: GestionPublicacionesComponent },
      {path: 'crear', component: CrearPublicacionComponent },
      {path: 'mis_publicaciones', component: MisPublicacionesComponent },
    ],
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunidadRoutingModule { 

}