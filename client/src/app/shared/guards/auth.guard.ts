
import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { LocalStorageService } from "../services/local-storage.service";

export const profileGuard: CanActivateFn =(route,state)=>{
  const ruter=inject(Router);
  const localStorageService = inject (LocalStorageService)
  if(localStorage.getItem('token'))
    {
      return true;
    }
  return false;
};