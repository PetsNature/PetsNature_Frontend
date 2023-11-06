import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';


const routes: Routes = [

    { path: 'ingreso', component: IngresoComponent},
    
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { 
 
}