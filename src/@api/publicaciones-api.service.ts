import {HttpClient, HttpHeaders} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom} from 'rxjs';
import {Time} from "@angular/common";

/*export interface Publicacion1 {
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
}*/

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
  imagen2: any;
}

export interface Tema{
  tema: String
}

export interface TipoMascota{
  nombre: String
}

export interface RazaAnimal{
  nombre: String
  tipoMascota: TipoMascota
}

export interface CrearPublicacion {
  tema: Tema;
  tipoMascota: TipoMascota;
  razaAnimal: RazaAnimal;
  contenido: string;
  categoria: string;
  enlace: string;
}

export interface SavePublicacionResponse{
   date: Date;
   hora: Time;
   categoria: string;
   id_usuario: number;
   tema: Tema;
   tipoMascota: TipoMascota;
   enlace: string;
   contenido: string;
   img: string;
   reacciones: bigint;
   razaAnimal: RazaAnimal;
}

@Injectable({
  providedIn: 'root'
})

export class PublicacionesApiService {

  httpClient = inject(HttpClient)


  async crearPublicacionSinImg(formData: FormData, id: number) {
    console.log(formData.get('crearPublicacionSerializer'))
    return lastValueFrom(this.httpClient.post<SavePublicacionResponse>(`http://localhost:8080/descubre/${id}/crear_publicacion`,formData,{ headers:{'No-Token': 'true'}}));
  }
}
