import { Component, inject, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';


@Component({
  selector: 'app-descubre',
  templateUrl: './descubre.component.html',
  styleUrls: ['./descubre.component.css']
})
export class DescubreComponent implements OnInit{
  readonly authenticationService = inject(AuthenticationService)


  ngOnInit(){}

  get Name() {
    return this.authenticationService.authenticatedUser.value?.nombre ?? 'Invitado'
  }

  
}
