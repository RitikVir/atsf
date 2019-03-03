import { Injectable } from '@angular/core';
import { loginData, loginDetailData } from './interfaces';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url: string = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}
  userLogin(loginInfo: loginData) {
    return this.http
      .post<loginDetailData>(`${this.url}/auth/login`, loginInfo)
      .pipe(
        map(data => {
          const token = JSON.stringify(data.token);
          const decode = helper.decodeToken(token);
          if (token) {
            localStorage.setItem('token', token);
          }
          return decode;
        })
      );
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !helper.isTokenExpired(token);
  }
  public userInfo() {
    const token = localStorage.getItem('token');
    const decode = helper.decodeToken(token);
    return decode;
  }
}
