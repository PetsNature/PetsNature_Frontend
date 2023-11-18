import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-descubre',
  templateUrl: './descubre.component.html',
  styleUrls: ['./descubre.component.css']
})
export class DescubreComponent implements OnInit {
  isCrearPublicacionesRoute: boolean = false;
  buttonStyle: any = {};

  ngOnInit() {
    this.checkRouteConditions();

    // Recuperar el estado almacenado
    const storedColor = localStorage.getItem('breadcrumbButtonColor');
    if (storedColor) {
      this.buttonStyle = {
        color: storedColor === 'white' ? 'white' : '',
        'background-color': storedColor === '#F99A5B' ? '#F99A5B' : ''
      };
    }
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRouteConditions();
        // Almacenar el estado después de verificar las condiciones
        localStorage.setItem('breadcrumbButtonColor', this.getButtonColor());
      }
    });
  }

  private checkRouteConditions() {
    const currentRoute = this.router.url;
    this.isCrearPublicacionesRoute = this.router.isActive('/intranet/descubre/crear', false);
  }

  private getButtonColor(): string {
    return this.isCrearPublicacionesRoute ? '#F99A5B' : '';
  }
}

