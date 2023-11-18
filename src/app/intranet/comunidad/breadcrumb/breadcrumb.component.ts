import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: BreadcrumbItem[] = [];

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateBreadcrumbs();
    });
  }

  constructor(private router: Router) {
    this.updateBreadcrumbs();
  }

  private updateBreadcrumbs() {
    const currentRoute = this.router.url;
    const segments = currentRoute.split('/').filter(segment => segment !== ''); // Eliminar segmentos vacíos
  
    this.breadcrumbs = segments.map((segment, index) => {
      let label = segment.toUpperCase(); // Mantén el segmento en mayúsculas por defecto
      let route = `/${segments.slice(0, index + 1).join('/')}`;
  
      // Personaliza los nombres según tus necesidades
      if (segment === 'intranet') {
        label = 'INICIO';
      } else if (segment === 'descubre') {
        label = 'DESCUBRE';
      } else if (segment === 'mis_publicaciones') {
        label = 'MIS PUBLICACIONES';
      } else if (segment === 'crear') {
        label = 'CREAR PUBLICACIÓN';
      }
  
      return { label, route };
    });
  }
  
}

interface BreadcrumbItem {
  label: string;
  route: string;
}
