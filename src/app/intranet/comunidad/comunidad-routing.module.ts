import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescubreComponent } from './descubre/descubre.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';




const routes: Routes = [
  
    { path: '', component: DescubreComponent, children: [
      {path: '', component: PublicacionesComponent },
      {path: 'crear', component: CrearPublicacionComponent },
    ],
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunidadRoutingModule { 

}