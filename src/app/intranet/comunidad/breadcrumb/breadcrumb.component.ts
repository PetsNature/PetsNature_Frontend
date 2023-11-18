import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  isCrearPublicacionesRoute: boolean = false;
  isDescubreRoute: boolean = false;

  ngOnInit() {
    this.checkRouteConditions();
  }
  
  private checkRouteConditions() {
    const currentRoute = this.router.url;
    this.isCrearPublicacionesRoute = this.router.isActive('/intranet/descubre/crear', false);
    this.isDescubreRoute = !this.isCrearPublicacionesRoute && this.router.isActive('/intranet/descubre', false);
  }
  
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkRouteConditions();
    });
  }
  
}
