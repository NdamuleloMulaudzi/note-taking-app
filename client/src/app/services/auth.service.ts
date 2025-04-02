import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  LoginInterface,
  registerInterface,
} from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  SERVER = environment.SERVER;
  constructor(private http: HttpClient) {}

  register(userInfo: registerInterface): Observable<registerInterface> {
    return this.http.post<registerInterface>(
      `${this.SERVER}/auth/register`,
      userInfo
    );
  }

  login(userInfo: LoginInterface): Observable<LoginInterface> {
    return this.http.post<LoginInterface>(
      `${this.SERVER}/auth/login`,
      userInfo
    );
  }
}
