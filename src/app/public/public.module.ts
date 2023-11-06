import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [

    CommonModule,
    LayoutModule,
    HttpClientModule,
    PublicRoutingModule
  ]
})
export class PublicModule {
  constructor() {
    console.log('public loaded');
  }
 }
