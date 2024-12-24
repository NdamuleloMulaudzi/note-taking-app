import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  setUser(user: string) {
    localStorage.setItem('user', user);
  }

  getUser() {
    localStorage.getItem('user');
  }
}
