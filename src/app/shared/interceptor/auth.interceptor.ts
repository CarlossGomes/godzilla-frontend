import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser = this.authenticationService.currentUserValue;

    if (currentUser && currentUser.access_token) {
      return next.handle(this.addTokenHeader(request, currentUser.access_token));
    }
    return next.handle(request);
  }

  private addTokenHeader(request: HttpRequest<any>, token: String) {
    return request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}s`) })
  }
}
