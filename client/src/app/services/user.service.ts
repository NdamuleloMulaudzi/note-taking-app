import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  setUser(user: string) {
    localStorage.setItem('user', user);
  }

  getUser(): UserInterface | null {
    if (localStorage.getItem('user')) {
      let user: string = localStorage.getItem('user') || '';
      return JSON.parse(user) as UserInterface;
    }
    return null;
  }
}
