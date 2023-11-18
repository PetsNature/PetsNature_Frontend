import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-descubre',
  templateUrl: './descubre.component.html',
  styleUrls: ['./descubre.component.css']
})
export class DescubreComponent implements OnInit {
  isCrearPublicacionesRoute: boolean = false;
  isMisPublicacionesRoute: boolean = false;

  ngOnInit() {
    this.checkRouteConditions();

  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRouteConditions();
      }
    });
  }

  private checkRouteConditions() {
    const currentRoute = this.router.url;
    this.isCrearPublicacionesRoute = this.router.isActive('/intranet/descubre/crear', false);
    this.isMisPublicacionesRoute = this.router.isActive('/intranet/descubre/mis_publicaciones', false);
  }

 
}

