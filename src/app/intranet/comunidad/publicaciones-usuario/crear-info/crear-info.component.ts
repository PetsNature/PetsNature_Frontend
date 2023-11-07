import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-info',
  templateUrl: './crear-info.component.html',
  styleUrls: ['./crear-info.component.css']
})
export class CrearInfoComponent {
  
  categoria: string= 'información';
  tema: string= '';
  tipoMascota: string = 'No especificado';
  raza: string = 'No especificada';
  razas: string[] = [];
  titulo: string = '';
  descripcion: string = '';
  contenido: string = '';
  e_interes: string ='';

  //mensajes de advertencia
  mostrarAdvertenciaTitulo: boolean = false;
  mostrarAdvertenciaDescripcion: boolean = false;
  mostrarAdvertenciaContenido: boolean = false;
  //
  

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
    this.raza = ''; // Limpia la selección de raza
  }

  limpiar_pub(){
    this.tema='';
    this.tipoMascota= 'No especificado';
    this.raza= 'No especificada';
    this.titulo = '';
    this.descripcion= '';
    this.contenido= '';
    this.e_interes= '';
    
  }

  publicar() {
    if (this.titulo && this.descripcion && this.contenido) {
      // Todos los campos están llenos, mostrar un console.log
      this.mostrarAdvertenciaTitulo = false;
      this.mostrarAdvertenciaDescripcion = false;
      this.mostrarAdvertenciaContenido = false;
      console.log('Atributos de la publicación:');
      console.log('Categoria:', this.categoria)
      console.log('Tema:', this.tema);
      console.log('Tipo de Mascota:', this.tipoMascota);
      console.log('Raza:', this.raza);
      console.log('Título:', this.titulo);
      console.log('Descripción:', this.descripcion);
      console.log('Contenido:', this.contenido);
      console.log('Enlace de Interés:', this.e_interes);
      this.limpiar_pub()

    } else {
      // Mostrar advertencias para campos faltantes
      this.mostrarAdvertenciaTitulo = !this.titulo;
      this.mostrarAdvertenciaDescripcion = !this.descripcion;
      this.mostrarAdvertenciaContenido = !this.contenido;
    }

  }
}
