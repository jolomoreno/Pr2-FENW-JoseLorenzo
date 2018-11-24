import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseurl_1 = 'http://fenw.etsisi.upm.es:10000';
  private baseurl_2 = 'http://fenw.etsisi.upm.es:5555';
  // TODO: quitar token hardcode
  bearerToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZ';

  constructor() { }

  doLogin(username, password) {
    if (username === 'Paco' && password === 'paco1') {
      return this.bearerToken;
    } else {
      return 'error';
    }
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  public get loggedIn(): boolean {
    return (sessionStorage.getItem('token') !== null);
  }
}
