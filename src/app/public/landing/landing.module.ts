import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    HomeComponent,
 

  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    LayoutModule,
    HttpClientModule
  ],

})
export class LandingModule { 
  constructor() {
    console.log('landing loaded');
  }
}
