import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom} from 'rxjs';

export interface Publicacion {
  id: string;
  categoria: string;
  tema: string;
  tipoMascota: string;
  raza: string;
  contenido: string;
  e_interes: string;
  fecha: string;
  fecha_creacion: string;
  comentarios: any[];
  likes: any[];
  imagen: any;
}

export interface SavePublicacionResponse{
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class PublicacionesApiService {

  httpClient = inject(HttpClient)
  url="http://18.118.4.251/descubre/{id}/crear_publicacion" 

  getListPublicaciones(){
    return lastValueFrom(this.httpClient.get<Publicacion[]>(this.url));
  }

  async savePublicacion(publicacion: Publicacion){
    return lastValueFrom(this.httpClient.post<SavePublicacionResponse>(this.url, publicacion));
  }

}

