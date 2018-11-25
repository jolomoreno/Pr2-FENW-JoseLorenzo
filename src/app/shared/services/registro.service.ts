import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private baseurl = 'http://fenw.etsisi.upm.es:5555';

  constructor(private http: HttpClient) { }

  getAnUser(username: string) {
    return this.http.get (this.baseurl + '/users' + '/' + username);
  }

  postUser (user) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.baseurl + '/users', user, {headers});
  }
}
