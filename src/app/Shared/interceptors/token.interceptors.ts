import { AuthService } from './../../auth/services/auth.services';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(protected auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
       Authorization: `Bearer ${this.auth.getuserToken()}`,
      }
    });
    console.log('Bearer token', this.auth.getuserToken());
    return next.handle(request);
  }
}
