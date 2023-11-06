import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

 // { path: 'ingreso', loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule) },
  //{ path: 'intranet', loadChildren: () => import('./intranet/intranet.module').then((m) => m.IntranetModule) },
  { path: '', loadChildren: () => import('./public/public.module').then((m) => m.PublicModule) },
  { path: '', loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule) },
  { path: '', loadChildren: () => import('./intranet/intranet.module').then((m) => m.IntranetModule) },
 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
