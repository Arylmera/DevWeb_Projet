import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class NotfoundInterceptor implements HttpInterceptor {
  private router: Router;
  constructor() {}

  // Intercepte toutes les requetes HTML
  // Si erreur 401 -> deconnexion automatique par sécurité
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 404) {
        this.router.navigate(['/not-found']);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
