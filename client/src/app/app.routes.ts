import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authGuard } from './auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      {
        path: 'login',
        component: LoginPageComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    // canActivate: [authGuard],
  },
  {
    path: '**', // Wildcard route
    redirectTo: 'auth/login', // Redirect to the home page or desired path
  },
];
