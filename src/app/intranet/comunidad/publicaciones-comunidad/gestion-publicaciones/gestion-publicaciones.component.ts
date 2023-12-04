import { Component } from '@angular/core';
import { CategoriaService } from '../../categoria.service';

@Component({
  selector: 'app-gestion-publicaciones',
  templateUrl: './gestion-publicaciones.component.html',
  styleUrls: ['./gestion-publicaciones.component.css']
})
export class GestionPublicacionesComponent {
  categoria="informacion" ;

  constructor(private categoriaService: CategoriaService) { }

  setCategoria(categoria: string) {
    this.categoria = categoria;
    this.categoriaService.setCategoria(categoria);
    console.log(categoria)
  }

  getButtonStyles(categoria: string) {
    return {
      backgroundColor: this.categoria === categoria ? '#FF9A5B' : 'white',
      color: this.categoria === categoria ? 'white' : 'black'
    };
  }
}
