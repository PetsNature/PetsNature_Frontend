import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../../publicacion.service';

@Component({
  selector: 'app-mis-publicaciones',
  templateUrl: './mis-publicaciones.component.html',
  styleUrls: ['./mis-publicaciones.component.css']
})
export class MisPublicacionesComponent implements OnInit {
  publicaciones: any[] = []; // Aquí almacenaremos todas las publicaciones
  publicacionActual: any;
  comentariosVisible = false;
  respuestasVisiblesComentario: { [key: number]: boolean } = {};
  respuestasVisiblesRespuesta: { [key: number]: boolean } = {};
  

  nuevoComentario: string = '';
  nuevaRespuestaComentario: { [key: number]: string } = {};
  nuevaRespuestaRespuesta: { [key: number]: string } = {};

  
  constructor(private publicacionService: PublicacionService) {
    this.cargarComentarios();
  }

  ngOnInit() {
    // Obtenemos todas las publicaciones del servicio
    this.publicaciones = this.publicacionService.getPublicaciones();
    // Aseguramos que cada publicación tenga su propio conjunto de comentarios
    for (let publicacion of this.publicaciones) {
      publicacion.comentarios = [];
    }
    // Cargamos los comentarios del localStorage
    this.cargarComentarios();
  }
  
  

  toggleComentarios() {
    this.comentariosVisible = !this.comentariosVisible;
  }

  toggleRespuestaComentario(commentId: number) {
    if (this.respuestasVisiblesComentario[commentId] === undefined) {
      this.respuestasVisiblesComentario[commentId] = true;
    } else {
      this.respuestasVisiblesComentario[commentId] = !this.respuestasVisiblesComentario[commentId];
    }
  }

  toggleRespuestaRespuesta(respuestaId: number) {
    if (this.respuestasVisiblesRespuesta[respuestaId] === undefined) {
      this.respuestasVisiblesRespuesta[respuestaId] = true;
    } else {
      this.respuestasVisiblesRespuesta[respuestaId] = !this.respuestasVisiblesRespuesta[respuestaId];
    }
  }

  agregarComentario(publicacion: any, usuario: string, contenido: string) {
    if (contenido.length < 1 || contenido.length > 500) {
      alert('Límite de caracteres sobrepasado');
      return;
    }
    const nuevoComentario = {
      id: publicacion.comentarios.length + 1,
      usuario: usuario,
      contenido: contenido,
      respuestas: []
    };
  
    publicacion.comentarios.push(nuevoComentario);
    publicacion.nuevoComentario = '';
    this.guardarComentarios();
  }
  

  agregarRespuesta(publicacion: any, commentId: number, usuario: string, contenido: string, esRespuesta: boolean) {
    if (contenido.length < 1 || contenido.length > 500) {
      alert('Límite de caracteres sobrepasado');
      return;
    }
    const nuevaRespuesta = {
      id: publicacion.comentarios[commentId - 1].respuestas.length + 1,
      usuario: usuario,
      contenido: contenido
    };
  
    publicacion.comentarios[commentId - 1].respuestas.push(nuevaRespuesta);
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
    for (let publicacion of this.publicaciones) {
      localStorage.setItem('comentarios' + publicacion.id, JSON.stringify(publicacion.comentarios));
    }
  }
  
  cargarComentarios() {
    for (let publicacion of this.publicaciones) {
      let comentarios = localStorage.getItem('comentarios' + publicacion.id);
      if (comentarios !== null) {
        publicacion.comentarios = JSON.parse(comentarios);
      }
    }
  }
  
  
}