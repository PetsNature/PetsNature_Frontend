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

  updatePublicacion(publicacionActualizada: any) {
    // Obtenemos todas las publicaciones del localStorage
    let publicaciones = this.getPublicaciones();
  
    // Buscamos la publicación que queremos actualizar
    for (let i = 0; i < publicaciones.length; i++) {
      if (publicaciones[i].id === publicacionActualizada.id) {
        // Actualizamos la publicación
        publicaciones[i] = publicacionActualizada;
  
        // Guardamos las publicaciones actualizadas en el localStorage
        localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
  
        return;
      }
    }
  
    // Si no encontramos la publicación, la agregamos al array de publicaciones
    publicaciones.push(publicacionActualizada);
  
    // Guardamos las publicaciones actualizadas en el localStorage
    localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
  }
  
}

