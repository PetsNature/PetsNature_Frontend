import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit{
  isCrearPublicacionesRoute: boolean = false;
  isDescubreRoute: boolean = false;
  ngOnInit(){}

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCrearPublicacionesRoute = this.router.url === '/intranet/descubre/crear';
      }
      if (event instanceof NavigationEnd) {
        this.isDescubreRoute = this.router.url === '/intranet/descubre';
      }

    });

  
}
}
