import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categoria = new BehaviorSubject<string>('informacion');

  categoria$ = this.categoria.asObservable();

  setCategoria(categoria: string) {
    this.categoria.next(categoria);
  }
}