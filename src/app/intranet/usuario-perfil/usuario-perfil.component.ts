import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent {

  imagenPerfil = './assets/img-perfil.png'; // Ruta de la imagen predeterminada

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenPerfil = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  subirFoto() {
    // Implementa la lógica para subir la imagen al servidor si es necesario.
    // Puedes acceder al archivo seleccionado desde this.imagenPerfil.
    // Por ejemplo, podrías usar una biblioteca como 'HttpClient' para enviar la imagen al servidor.
    console.log('Implementa la lógica para subir la foto al servidor aquí.');
  }
}
