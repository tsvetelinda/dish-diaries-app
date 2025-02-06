import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';

const { apiUrl } = environment;
const API = '/api';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, apiUrl),
      withCredentials: true
    })
  }

  //const errorService = inject(ErrorMsgService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        router.navigate(['/login']);
      } else {
        //errorService.setError(err);
        router.navigate(['/error']);
      }

      return [err];
    })
  );
};