import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../user/user.service";
import { catchError, Observable, of } from "rxjs";

export const GuestGuard: CanActivateFn = () => {
    const userService = inject(UserService);
    const router = inject(Router);

    if (userService.isLogged) {
        router.navigate(['/home']);
        return of(false);
    }
      
    return new Observable<boolean>((observer) => {
        userService.getProfile().pipe(
          catchError((error) => {
            if (error.status === 401) {
              observer.next(true);
            } else {
              console.error('An error occurred:', error);
              observer.next(false);
            }
            return of(false);
          })
        ).subscribe(user => {
          if (userService.isLogged) {
            router.navigate(['/home']);
            observer.next(false);
          } else {
            observer.next(true);
          }
        });
    });
};