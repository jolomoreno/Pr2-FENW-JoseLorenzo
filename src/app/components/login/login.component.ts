import { Component, OnInit } from '@angular/core';
import { Login } from '../../shared/models/login';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from '../../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginIncorrect = false;
  public login: Login;

  formLogin = new FormGroup({
    username: new FormControl('',
      [Validators.required]),
    password: new FormControl('',
      [Validators.required])
  });

  constructor() {
    this.login = new Login('', '');
  }

  get f() { return this.formLogin.controls; }

  ngOnInit() {
  }

  onSubmit(formLogin: FormGroup) {
    console.log('Has pulsado el botón de ENVIAR');

    this.login.username = formLogin.get('username').value;
    this.login.password = formLogin.get('password').value;

    console.log(this.login.username, 'USERNAME-SUBMIT');
    console.log(this.login.password, 'PASSWORD-SUBMIT');
  }

}
