import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseurl = 'http://fenw.etsisi.upm.es:5555';
  // TODO: quitar token hardcode
  bearerToken = '';

  constructor(private http: HttpClient) { }

  doLogin(username, password) {
    return this.http.get(this.baseurl + '/users/login?username=' + username + '&password=' + password, {observe: 'response'})
      .pipe(
          tap(response => console.log(response, 'SUCCESS LOGIN'),
        error => console.log(error, 'ERROR LOGIN'))
      );
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  public get loggedIn(): boolean {
    return (sessionStorage.getItem('token') !== null);
  }
}
