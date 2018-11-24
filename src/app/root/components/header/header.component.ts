import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../shared/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token = '';
  constructor(private login: LoginService) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token, 'TOKEN');
  }

  logout() {
    this.login.logout();
  }

}
