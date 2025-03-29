import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';
import {jwtDecode} from 'jwt-decode'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

 

  getUserId() {
    const token =localStorage.getItem('token')
    if (token) {
      const decodeToken:any = jwtDecode(token);
  
      return decodeToken.id
     
  } else {
      throw('Token not found in localStorage');
  }
  }

  removeUser() {
    localStorage.removeItem('token');
  }
}
