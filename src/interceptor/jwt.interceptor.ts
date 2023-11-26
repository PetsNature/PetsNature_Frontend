import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../app/authentication/authentication.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  user:User= {
    nombre:'',
    id:0,
    token:''
  };
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const noTokenHeader = request.headers.get('No-Token');

    if (noTokenHeader && noTokenHeader.toLowerCase() === 'true') {
      return next.handle(request);
    }

    return next.handle(this.addTokenToRequest(request));
  }
  private addTokenToRequest(request: HttpRequest<any>): HttpRequest<any> {
    const token = localStorage.getItem('AUTH_USER');
    if (token) {
      this.user=JSON.parse(token)
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.user.token}`
        }
      });
    }
    return request;
  }
}
