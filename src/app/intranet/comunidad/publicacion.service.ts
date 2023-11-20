import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  private publicacionActual: any;

  constructor() { }

  getPublicaciones() {
    let publicacionesStorage = localStorage.getItem('publicaciones');
  
    if (publicacionesStorage) {
      return JSON.parse(publicacionesStorage);
    }
  
    return [];
  }
  

  getPublicacionActual() {
    // Intenta obtener la publicación del localStorage
    let publicacionActualStorage = localStorage.getItem('publicacionActual');

    if (publicacionActualStorage) {
      this.publicacionActual = JSON.parse(publicacionActualStorage);
    }

    return this.publicacionActual;
  }

  setPublicacionActual(publicacion: any) {
    this.publicacionActual = publicacion;
    // Guarda la publicación en el localStorage
    localStorage.setItem('publicacionActual', JSON.stringify(this.publicacionActual));
  }
}

