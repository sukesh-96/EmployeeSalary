import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from './shared/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login: Login = new Login();

  constructor(private http: HttpClient) { }
  public Login(userInfo: Login): Observable<any> {

    return this.http.get(environment.baseUrl + '/logins?username=' + userInfo.username + '&password=' + userInfo.password);
  }
  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null
  }

  public isLoggedOut() {
    return localStorage.removeItem('ACCESS_TOKEN');
}
}
