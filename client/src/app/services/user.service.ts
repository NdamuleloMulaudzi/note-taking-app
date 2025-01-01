import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  setUser(data: any): void {
    const user = Array.isArray(data) ? data[0] : data;
    localStorage.setItem('user-data', JSON.stringify(user));
  }

  getUser() {
    const userData = localStorage.getItem('user-data');
    return userData ? JSON.parse(userData) : null;
  }
}
