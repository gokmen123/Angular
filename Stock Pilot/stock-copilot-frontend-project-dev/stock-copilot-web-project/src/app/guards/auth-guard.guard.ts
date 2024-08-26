import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Account } from '../core/provides/account/account';
import { LocalStorageService } from '../core/provides/local-storage.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const localStorageService = inject(LocalStorageService);
  const loginTime = parseInt(localStorageService.getItem('loginTime') || '0', 10);
  const currentTime = new Date().getTime();
  const router = inject(Router);
  
  // Retrieve token from local storage
  const token = localStorageService.getItem('token');
  const account = inject(Account);
  if(token !== null){
    account.token = token;
  } // Ensure the account token is set

  console.log("Checking auth guard...");
  console.log("Login Time:", loginTime);
  console.log("Current Time:", currentTime);
  console.log("Time difference:", currentTime - loginTime);
  console.log("Token:", account.token);

  if (account.token && (currentTime - loginTime) < (3 * 60 * 60 * 1000)) {
    console.log("User is authenticated and session is valid.");
    return true;
  }

  localStorageService.removeItem('loginTime');
  localStorageService.removeItem('token');
  console.log("Session expired or user not logged in, redirecting to login.");
  router.navigate(['login']);
  return false;
};
