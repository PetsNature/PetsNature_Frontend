import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-pregunta',
  templateUrl: './crear-pregunta.component.html',
  styleUrls: ['./crear-pregunta.component.css']
})
export class CrearPreguntaComponent {
  categoria: string= 'Preguntas';
  tema: string= '';
  tipoMascota: string = 'No especificado';
  raza: string = 'No especificada';
  razas: string[] = [];
  contenido: string = '';
  mostrarAdvertenciaContenido: boolean = false;
  e_interes: string ='';

  razasPorTipo: { [key: string]: string[] } = {
    "Perros": ["Labrador Retriever", "Shih Tzu","Bulldog Francés", "Pastor Alemán", "Golden Retriever", "Poodle", "Dachshund"],
    "Gatos": ["Siamés", "Maine Coon", "Persa", "Bengal", "British Shorthair", "Ragdoll"],
    "Aves": ["Canario", "Periquito", "Loro Gris Africano", "Cacatúa", "Agapornis", "Papagayo"],
    "Roedores": ["Hamster Dorado", "Conejo Holandés", "Rata Dumbo", "Jerbo de Mongolia", "Cobaya de Pelo Largo", "Chinchilla"],
    "Peces": ["Guppy", "Tetra Neón", "Pez Ángel", "Betta", "Corydoras", "Goldfish"],
    "Reptiles": ["Iguana Verde", "Gecko Leopardo", "Tortuga de Caja", "Serpiente de Maíz", "Dragón Barbudo", "Tortuga de Orejas Rojas"]
  };
  

  limpiar_pub(){
    this.tema='';
    this.tipoMascota= 'No especificado';
    this.raza= 'No especificada';
    this.contenido= '';
    this.e_interes= '';
    
  }

  actualizarRazas() {
    this.razas = this.razasPorTipo[this.tipoMascota] || [];
    this.raza = ''; // Limpia la selección de raza
  }

  publicar() {
    if (this.contenido) {
      // Todos los campos están llenos, mostrar un console.log
      this.mostrarAdvertenciaContenido = false;
      console.log('Atributos de la publicación:');
      console.log('Categoria:', this.categoria)
      console.log('Tema:', this.tema);
      console.log('Tipo de Mascota:', this.tipoMascota);
      console.log('Raza:', this.raza);
      console.log('Contenido:', this.contenido);
      console.log('Enlace de Interés:', this.e_interes);
      this.limpiar_pub()

    } else {
      // Mostrar advertencias para campos faltantes
      this.mostrarAdvertenciaContenido = !this.contenido;
    }
    
  }
}
