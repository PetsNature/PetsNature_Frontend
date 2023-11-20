import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  comentariosVisible = false;
  respuestasVisiblesComentario: { [key: number]: boolean } = {};
  respuestasVisiblesRespuesta: { [key: number]: boolean } = {};
  comentarios: any[] = [];

  nuevoComentario: string = '';
  nuevaRespuestaComentario: { [key: number]: string } = {};
  nuevaRespuestaRespuesta: { [key: number]: string } = {};

  constructor() {
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

  agregarComentario(usuario: string, contenido: string) {
    if (contenido.length < 1 || contenido.length > 500) {
      alert('Límite de caracteres sobrepasado');
      return;
    }
    const nuevoComentario = {
      id: this.comentarios.length + 1,
      usuario: usuario,
      contenido: contenido,
      respuestas: []
    };

    this.comentarios.push(nuevoComentario);
    this.nuevoComentario = '';
    this.guardarComentarios();
  }

  agregarRespuesta(commentId: number, usuario: string, contenido: string, esRespuesta: boolean) {
    if (contenido.length < 1 || contenido.length > 500) {
      alert('Límite de caracteres sobrepasado');
      return;
    }
    const nuevaRespuesta = {
      id: this.comentarios[commentId - 1].respuestas.length + 1,
      usuario: usuario,
      contenido: contenido
    };

    this.comentarios[commentId - 1].respuestas.push(nuevaRespuesta);
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
    localStorage.setItem('comentarios', JSON.stringify(this.comentarios));
  }

  cargarComentarios() {
    let comentarios = localStorage.getItem('comentarios');
    if (comentarios !== null) {
      this.comentarios = JSON.parse(comentarios);
    } else {
      // Manejar el caso cuando los comentarios son null
      this.comentarios = [];
    }
  }
}

