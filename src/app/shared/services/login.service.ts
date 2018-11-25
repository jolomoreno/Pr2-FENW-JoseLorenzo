import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseurl = 'http://fenw.etsisi.upm.es:5555';
  // TODO: quitar token hardcode
  bearerToken = '';

  constructor(private http: HttpClient) { }

  doLogin(username, password) {
    return this.http.get(this.baseurl + '/users/login?username=' + username + '&password=' + password);
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  public get loggedIn(): boolean {
    return (sessionStorage.getItem('token') !== null);
  }
}
