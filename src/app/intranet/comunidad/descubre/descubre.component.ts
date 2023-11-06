import { Component, inject, OnInit } from '@angular/core';
//import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-descubre',
  templateUrl: './descubre.component.html',
  styleUrls: ['./descubre.component.css']
})
export class DescubreComponent implements OnInit{
  //readonly authenticationService = inject(AuthenticationService)
  
  isCrearPublicacionesRoute: boolean = false;

  ngOnInit(){}

  //get Name() {
    //return this.authenticationService.authenticatedUser.value?.nombre ?? 'Invitado'
 // }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCrearPublicacionesRoute = this.router.url === '/intranet/descubre/crear';
      }
    });

  
}
}