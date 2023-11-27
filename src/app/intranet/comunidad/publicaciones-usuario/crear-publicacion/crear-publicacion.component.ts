import {Component, inject, OnInit} from '@angular/core';
import { PublicacionService } from '../../publicacion.service';
import {
  CrearPublicacion,
  PublicacionesApiService,
  RazaAnimal,
  Tema,
  TipoMascota
} from "../../../../../@api/publicaciones-api.service";
import {User} from "../../../../authentication/authentication.service";
import {LocalStorageSubject} from "../../../../../shared/localstorage/localStorageSubject";
import {ERROR} from "@angular/compiler-cli/src/ngtsc/logging/src/console_logger";

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
  selectedFile: File = new File([],'');
  publicacionActual: any;

  tema2: Tema={
    tema:'No especificado',
  }

  tipoMascota2:TipoMascota={
    nombre:'No especificado'
  }

  raza2:RazaAnimal={
    nombre:'Poodle',
    tipoMascota:this.tipoMascota2
  }

  publicacion2:CrearPublicacion={
    tema: this.tema2,
    tipoMascota: this.tipoMascota2,
    razaAnimal: this.raza2,
    contenido: '',
    categoria: 'informacion',
    enlace: '',
  }

  apiPublicacion=inject(PublicacionesApiService)

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

  setCategoria2(nuevaCategoria: string): void {
    this.publicacion2.categoria = nuevaCategoria;
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

    // Restablecer la imagen de vista previa
    let previewElement = <HTMLImageElement>document.getElementById('preview');
    if (previewElement) {
      previewElement.src = '';
    }
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

  onFileSelected(event: Event) {
    let inputElement = <HTMLInputElement>event.target;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        let previewElement = <HTMLImageElement>document.getElementById('preview');
        if (previewElement) {
          previewElement.src = <string>reader.result;
        }
      }
      reader.readAsDataURL(this.selectedFile);
    }
  }

  /*onFileSelected2(event: Event) {
    const formData=new FormData()
    if (this.publicacion2.imagenxd){
      formData.append('file',this.publicacion2.imagenxd)
    }

  }*/

  triggerFileInput() {
    let fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  publicar() {
    if (this.contenido) {
      this.mostrarAdvertenciaContenido = false;

      // Obtenemos la fecha actual
      let fechaActual = new Date();

      // Formateamos la fecha en el formato DD/MM/AA
      let fechaFormateada = ('0' + fechaActual.getDate()).slice(-2) + '/'
                         + ('0' + (fechaActual.getMonth()+1)).slice(-2) + '/'
                         + fechaActual.getFullYear().toString().substr(-2);

      let nuevaPublicacion = {
        id: this.generarId(),
        categoria: this.categoria,
        tema: this.tema,
        tipoMascota: this.tipoMascota,
        raza: this.raza,
        contenido: this.contenido,
        e_interes: this.e_interes,
        fecha: fechaFormateada,  // Agregamos la fecha a la publicación
        fecha_creacion: fechaActual,
        comentarios: [],
        likes: 0,  // Aquí se almacenarán los "likes"
        imagen: null,
      };

      if (this.selectedFile.size > 0) {  // Verifica si se ha seleccionado un archivo
        let reader = new FileReader();
        reader.onload = (event: any) => {
          nuevaPublicacion.imagen = event.target.result;
          this.guardarPublicacion(nuevaPublicacion);
          this.publicacionService.setPublicacionActual(nuevaPublicacion);
          this.limpiar_pub();
          console.log('Publicación creada:', nuevaPublicacion);
        }
        reader.readAsDataURL(this.selectedFile);
      } else {  // Si no se ha seleccionado un archivo, guarda la publicación sin imagen
        this.guardarPublicacion(nuevaPublicacion);
        this.publicacionService.setPublicacionActual(nuevaPublicacion);
        this.limpiar_pub();
        console.log('Publicación creada:', nuevaPublicacion);
      }
    } else {
      this.mostrarAdvertenciaContenido = true;
    }
  }

  getIdCliente():number | null{
    const user=localStorage.getItem("AUTH_USER")
    if (user !==null){
      let usuario:User =JSON.parse(user);
      return usuario.id
    }
    alert("Debe Iniciar Sesion para realizar esta accion")
    return null
  }

  async publicar2() {
    if (this.publicacion2.contenido) {
      this.mostrarAdvertenciaContenido = false;
      const idCliente = this.getIdCliente()
      if (idCliente !== null) {
        const formData=new FormData()
        formData.append('publicacion',JSON.stringify(this.publicacion2))
        if (this.selectedFile.size > 0) {
          formData.append('imagen',this.selectedFile)// Verifica si se ha seleccionado un archivo
            await this.apiPublicacion.crearPublicacionSinImg(formData, idCliente)
            this.limpiar_pub();
            console.log('Publicación creada:', this.publicacion2);
        } else {  // Si no se ha seleccionado un archivo, guarda la publicación sin imagen
          await this.apiPublicacion.crearPublicacionSinImg(formData, idCliente)
          this.limpiar_pub();
          console.log('Publicación creada:', this.publicacion2);
        }
      }
    } else {
      this.mostrarAdvertenciaContenido = true;
    }
  }

  /*async publicar2() {
    if (this.crearPublicacionSerializer.contenido) {
      this.mostrarAdvertenciaContenido = false;
      const idCliente = this.getIdCliente()
      if (idCliente !== null) {
        const formData=new FormData()
        const jsonBlob = new Blob([JSON.stringify(this.crearPublicacionSerializer)], { type: 'application/json' });
        formData.append('crearPublicacionSerializer', jsonBlob, 'datos.json');
        if (this.selectedFile.size > 0) {
          formData.append('imagen',this.selectedFile)// Verifica si se ha seleccionado un archivo
          await this.apiPublicacion.crearPublicacionSinImg(formData, idCliente)
          this.limpiar_pub();
          console.log('Publicación creada:', this.crearPublicacionSerializer);
        } else {  // Si no se ha seleccionado un archivo, guarda la publicación sin imagen
          await this.apiPublicacion.crearPublicacionSinImg(formData, idCliente)
          this.limpiar_pub();
          console.log('Publicación creada:', this.crearPublicacionSerializer);
        }
      }
    } else {
      this.mostrarAdvertenciaContenido = true;
    }*/
  handleFileInput(event: any) {
    //const file = event.target.files[0];
    this.selectedFile = event.target.files[0];
  }
}

