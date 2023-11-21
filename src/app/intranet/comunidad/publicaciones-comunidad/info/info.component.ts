import { Component } from '@angular/core';

export interface Comentario {
  id: number;
  usuario: string;
  contenido: string;
  fecha: string;
  respuestas: any[];
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})


export class InfoComponent {

  comentariosVisible = false;
  respuestasVisiblesComentario: { [key: number]: boolean } = {};
  respuestasVisiblesRespuesta: { [key: number]: boolean } = {};
  comentarios: Comentario[] = [];

  nuevoComentario: string = '';
  nuevaRespuestaComentario: { [key: number]: string } = {};
  nuevaRespuestaRespuesta: { [key: number]: string } = {};

  publicacion = {
    likes: 0,
    likeDado: false,
    comentarios: [] as Comentario[],
    comentariosVisible: false,
  };

  constructor() {
    this.cargarComentarios();
    this.cargarPublicacion();
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


  toggleLike(publicacion: any) {
    if (publicacion.likeDado) {
      publicacion.likes--;
    } else {
      publicacion.likes++;
    }
    publicacion.likeDado = !publicacion.likeDado;
    this.guardarPublicacion();
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
      this.publicacion = { likes: 0, likeDado: false, comentarios: [], comentariosVisible: false };

    }
  }
  
}

