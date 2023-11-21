import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom} from 'rxjs';

export interface User { //poner mismo modelo json que el backend
  nombre: string
  correo: string
}

export interface SaveUserResponse{
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class UsersApiService {

  httpClient = inject(HttpClient)
  url="http://18.118.4.251/registro"

getListUsers(){
    return lastValueFrom(this.httpClient.get<User[]>(this.url));
  }

async saveUser(user: User){
    return lastValueFrom(this.httpClient.post<SaveUserResponse>(this.url, user));
  }

}
