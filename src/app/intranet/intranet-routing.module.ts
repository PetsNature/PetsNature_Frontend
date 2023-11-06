import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';



const routes: Routes = [
  
    { path: 'intranet', component: InicioComponent, children: [
      {path: '', component: PaginaInicioComponent },
      { path: 'descubre', loadChildren: () => import('./comunidad/comunidad.module').then((m) => m.ComunidadModule) },
   
    ],
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { 

}