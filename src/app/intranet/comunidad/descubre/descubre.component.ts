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

  tema: string = 'No especificado';
  tipoMascota: string = 'No especificado';
  raza: string = 'No especificada';
  razas: string[] = [];

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

  esRutaDescubre(): boolean {
    return this.router.url === '/intranet/descubre';
  }

  razasPorTipo: { [key: string]: string[] } = {
    "Perros": ["Labrador Retriever", "Shih Tzu","Bulldog Francés", "Pastor Alemán", "Golden Retriever", "Poodle", "Dachshund"],
    "Gatos": ["Siamés", "Maine Coon", "Persa", "Bengal", "British Shorthair", "Ragdoll"],
    "Aves": ["Canario", "Periquito", "Loro Gris Africano", "Cacatúa", "Agapornis", "Papagayo"],
    "Roedores": ["Hamster Dorado", "Conejo Holandés", "Rata Dumbo", "Jerbo de Mongolia", "Cobaya de Pelo Largo", "Chinchilla"],
    "Peces": ["Guppy", "Tetra Neón", "Pez Ángel", "Betta", "Corydoras", "Goldfish"],
    "Reptiles": ["Iguana Verde", "Gecko Leopardo", "Tortuga de Caja", "Serpiente de Maíz", "Dragón Barbudo", "Tortuga de Orejas Rojas"]
  };

  actualizarRazas() {
    this.razas = this.razasPorTipo[this.tipoMascota] || [];
    this.raza = 'No especificada'; // Limpia la selección de raza
  }
}

