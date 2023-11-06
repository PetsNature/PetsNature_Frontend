import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { VentanaComponent } from './ventana/ventana.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { DescubreComponent } from './descubre/descubre.component';


const routes: Routes = [
  
    { path: '', component: InicioComponent, children: [
      {path: '', component: VentanaComponent },
      {path: 'descubre', component: DescubreComponent, children:[
        {path: '', component: PublicacionesComponent},
        {path: 'crear', component: CrearPublicacionComponent},
      ] },
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { 

}