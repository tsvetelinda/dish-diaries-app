import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../user/user.service";
import { catchError, Observable, of } from "rxjs";

export const AuthGuard: CanActivateFn = () => {
    const userService = inject(UserService);
    const router = inject(Router);

    if (userService.isLogged) {
        return of(true);
      }
    
      return new Observable<boolean>((observer) => {
        userService.getProfile().pipe(
          catchError((error) => {
            if (error.status === 401) {
              console.error('Unauthorized request - User is not logged in.');
              router.navigate(['/login']);
              observer.next(false);
            } else {
              console.error('An error occurred:', error);
              observer.next(false);
            }
            return of(false);
          })
        ).subscribe(user => {
          if (userService.isLogged) {
            observer.next(true);
          } else {
            router.navigate(['/login']);
            observer.next(false);
          }
        });
      });
}