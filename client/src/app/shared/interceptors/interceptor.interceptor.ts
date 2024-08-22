import { HttpInterceptorFn,HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, of,tap } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { inject } from '@angular/core';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService=inject(LocalStorageService)

  
  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        localStorage.setItem('token', event.body.accessToken);
      }
      return event;
    })

);
};
