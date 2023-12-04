import { Component } from '@angular/core';
import {Publicaciones} from "../../../../../@api/publicaciones-api.service";
import {PublicacionService} from "../../publicacion.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Comentario} from "../info/info.component";

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  crear_pub_visible = false;
  publicaciones:Publicaciones[]=[];
  comentariosVisible = false;
  respuestasVisiblesComentario: { [key: number]: boolean } = {};
  respuestasVisiblesRespuesta: { [key: number]: boolean } = {};
  comentarios: Comentario[] = [];

  nuevoComentario: string = '';
  nuevaRespuestaComentario: { [key: number]: string } = {};
  nuevaRespuestaRespuesta: { [key: number]: string } = {};

  publicacion = {
    id: 1,  // Asegúrate de que este id sea único para cada publicación
    likes: 0,
    likeDado: false,
    comentarios: [] as Comentario[],
    comentariosVisible: false,
  };
  constructor(private publicacionService: PublicacionService,public sanitizer:DomSanitizer) {
    this.cargarComentarios();
    this.cargarPublicaciones();
  }

  toggleComentarios() {
    this.comentariosVisible = !this.comentariosVisible;
  }

  toggleRespuestaComentario(commentId: number) {
    this.respuestasVisiblesComentario[commentId] = !this.respuestasVisiblesComentario[commentId];
  }

  toggleRespuestaRespuesta(respuestaId: number) {
    this.respuestasVisiblesRespuesta[respuestaId] = !this.respuestasVisiblesRespuesta[respuestaId];
  }

  agregarComentario(usuario: string, contenido: string) {
    if (contenido.length < 1 || contenido.length > 500) {
      alert('Límite de caracteres sobrepasado');
      return;
    }

    let fechaActual = new Date();

    // Formateamos la fecha en el formato DD/MM/AA
    let fechaFormateada = ('0' + fechaActual.getDate()).slice(-2) + '/'
        + ('0' + (fechaActual.getMonth()+1)).slice(-2) + '/'
        + fechaActual.getFullYear().toString().substr(-2);

    const nuevoComentario: Comentario = {
      id: this.publicacion.comentarios.length + 1,
      usuario: "YO",
      contenido: contenido,
      fecha: fechaFormateada,
      respuestas: []
    };

    this.publicacion.comentarios.push(nuevoComentario);
    this.nuevoComentario = '';
    this.guardarPublicacion();
    this.guardarComentarios();

  }

  agregarRespuesta(publicacion: any, commentId: number, usuario: string, contenido: string, esRespuesta: boolean) {
    if (contenido.length < 1 || contenido.length > 500) {
      alert('Límite de caracteres sobrepasado');
      return;
    }

    let fechaActual = new Date();

    // Formateamos la fecha en el formato DD/MM/AA
    let fechaFormateada = ('0' + fechaActual.getDate()).slice(-2) + '/'
        + ('0' + (fechaActual.getMonth()+1)).slice(-2) + '/'
        + fechaActual.getFullYear().toString().substr(-2);

    const nuevaRespuesta = {
      id: this.comentarios[commentId - 1].respuestas.length + 1,
      usuario: "YO",
      contenido: contenido,
      fecha: fechaFormateada,
    };

    this.publicacion.comentarios[commentId - 1].respuestas.push(nuevaRespuesta);
    this.limpiarRespuesta(commentId, esRespuesta);  // Limpia la respuesta después de agregarla
    if (esRespuesta) {
      this.respuestasVisiblesRespuesta[commentId] = false;  // Oculta el input después de agregar la respuesta
    } else {
      this.respuestasVisiblesComentario[commentId] = false;  // Oculta el input después de agregar la respuesta
    }
    this.guardarComentarios();
  }
  limpiarRespuesta(commentId: number, esRespuesta: boolean) {
    if (esRespuesta) {
      this.nuevaRespuestaRespuesta[commentId] = '';
    } else {
      this.nuevaRespuestaComentario[commentId] = '';
    }
  }

  guardarComentarios() {
    localStorage.setItem('comentarios', JSON.stringify(this.publicacion.comentarios));
  }

  cargarComentarios() {
    let comentarios = localStorage.getItem('comentarios');
    if (comentarios !== null) {
      this.publicacion.comentarios = JSON.parse(comentarios);
    }
  }



  guardarPublicacion() {
    localStorage.setItem('publicacion', JSON.stringify(this.publicacion));
  }

  cargarPublicacion() {
    let publicacion = localStorage.getItem('publicacion');
    if (publicacion !== null) {
      this.publicacion = JSON.parse(publicacion);
    } else {
      // Manejar el caso cuando la publicación es null
      this.publicacion = { id:1,likes: 0, likeDado: false, comentarios: [], comentariosVisible: false };

    }
  }

  async cargarPublicaciones() {
    try {
      this.publicaciones=await this.publicacionService.getPublicaciones2("pregunta")
    }catch (error){
      console.error('Error',error)
    }
  }

  toggleLike(publicacion: any) {
    if (publicacion.likeDado) {
      publicacion.likes--;
    } else {
      publicacion.likes++;
    }
    publicacion.likeDado = !publicacion.likeDado;
    this.guardarPublicacion();
  }
}
