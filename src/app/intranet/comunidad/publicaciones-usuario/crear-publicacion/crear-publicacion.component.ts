import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../../publicacion.service';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})

export class CrearPublicacionComponent implements OnInit {
 
  categoria: string = 'informacion'; //por defecto es informacion
  tema: string= 'No especificado';
  tipoMascota: string = 'No especificado';
  raza: string = 'No especificada';
  razas: string[] = [];
  contenido: string = '';
  mostrarAdvertenciaContenido: boolean = false;
  e_interes: string ='';

  publicacionActual: any;

  constructor(private publicacionService: PublicacionService) { }

  ngOnInit() {
    this.publicacionActual = this.publicacionService.getPublicacionActual();
  }
  

  razasPorTipo: { [key: string]: string[] } = {
    "Perros": ["Labrador Retriever", "Shih Tzu","Bulldog Francés", "Pastor Alemán", "Golden Retriever", "Poodle", "Dachshund"],
    "Gatos": ["Siamés", "Maine Coon", "Persa", "Bengal", "British Shorthair", "Ragdoll"],
    "Aves": ["Canario", "Periquito", "Loro Gris Africano", "Cacatúa", "Agapornis", "Papagayo"],
    "Roedores": ["Hamster Dorado", "Conejo Holandés", "Rata Dumbo", "Jerbo de Mongolia", "Cobaya de Pelo Largo", "Chinchilla"],
    "Peces": ["Guppy", "Tetra Neón", "Pez Ángel", "Betta", "Corydoras", "Goldfish"],
    "Reptiles": ["Iguana Verde", "Gecko Leopardo", "Tortuga de Caja", "Serpiente de Maíz", "Dragón Barbudo", "Tortuga de Orejas Rojas"]
  };

  generarId(): string {
    let fecha = new Date();
    return fecha.getTime().toString();
  }
  

  setCategoria(nuevaCategoria: string): void {
    this.categoria = nuevaCategoria;
  }

  getButtonStyles(categoria: string): any {
    return {
      'background-color': this.categoria === categoria ? '#FF9A5B' : 'white',
      'color': this.categoria === categoria ? 'white' : 'black'
    };
  }

  limpiar_pub(){
    this.tema='No especificado';
    this.tipoMascota= 'No especificado';
    this.raza= 'No especificada';
    this.contenido= '';
    this.e_interes= '';
    
  }

  actualizarRazas() {
    this.razas = this.razasPorTipo[this.tipoMascota] || [];
    this.raza = 'No especificada'; // Limpia la selección de raza
  }

  guardarPublicacion(publicacion: any) {
    let publicaciones = this.cargarPublicaciones();
    publicaciones.push(publicacion);
    localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
  }
  
  cargarPublicaciones(): any[] {
    let publicaciones = localStorage.getItem('publicaciones');
    if (publicaciones !== null) {
      return JSON.parse(publicaciones);
    } else {
      return [];
    }
  }
  

  publicar() {
    if (this.contenido) {
      this.mostrarAdvertenciaContenido = false;
      let nuevaPublicacion = {
        id: this.generarId(),
        categoria: this.categoria,
        tema: this.tema,
        tipoMascota: this.tipoMascota,
        raza: this.raza,
        contenido: this.contenido,
        e_interes: this.e_interes,
        comentarios: []
      };
      this.guardarPublicacion(nuevaPublicacion);
      this.publicacionService.setPublicacionActual(nuevaPublicacion);
      this.limpiar_pub();
      console.log('Publicación creada:', nuevaPublicacion);
    } else {
      this.mostrarAdvertenciaContenido = true;
    }
  }
  
}
