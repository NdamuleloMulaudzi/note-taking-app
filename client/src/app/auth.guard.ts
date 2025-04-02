import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from './services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = localStorage.getItem('token');

  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
