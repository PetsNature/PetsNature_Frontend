import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom} from 'rxjs';

export interface User {
  name: string
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
  url="poner la url del backend"

getListUsers(){
    return lastValueFrom(this.httpClient.get<User[]>(this.url));
  }

async saveUser(user: User){
    return lastValueFrom(this.httpClient.post<SaveUserResponse>(this.url, user));
  }

}
