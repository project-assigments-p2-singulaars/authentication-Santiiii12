// import { inject } from '@angular/core';
// import {  CanMatchFn,Route,Router, UrlSegment } from '@angular/router';
// import { AuthService } from '../core/auth.service';

// export const authGuard: CanMatchFn = (route, state) => {
//   const authService = inject(AuthService);
//   const router=inject(Router);


//   if(authService.isAuth()) {
//     return true;
//   }else{
//     const url=router.createUrlTree(['login/']);
//     return url ;
//   }
// };
import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { LocalStorageService } from "../services/local-storage.service";

export const profileGuard: CanActivateFn =(route,state)=>{
  const ruter=inject(Router);
  const localStorageService = inject (LocalStorageService)
  if(localStorage.getItem('token'))
    {
      // ruter.navigate(['/profile'])
      return true;
    }
  return false;
};