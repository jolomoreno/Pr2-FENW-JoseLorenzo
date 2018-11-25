import {Component, OnInit} from '@angular/core';
import {Login} from '../../shared/models/login';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../shared/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginIncorrect = false;
  login: Login;
  found = false;
  bearerToken = '';

  formLogin = new FormGroup({
    username: new FormControl('',
      [Validators.required]),
    password: new FormControl('',
      [Validators.required])
  });

  constructor(private logConex: LoginService, private router: Router) {
    this.login = new Login('', '');
  }

  get f() { return this.formLogin.controls; }

  ngOnInit() {
  }

  onSubmit(formLogin: FormGroup) {
    console.log('Has pulsado el botón de ENVIAR');

    this.login.username = formLogin.get('username').value;
    this.login.password = formLogin.get('password').value;



    this.logConex.doLogin(this.login.username, this.login.password) .subscribe(
    response => {
      console.log(response, 'TOKEN');
      if (response) {
        sessionStorage.setItem('token', response.toString());
      }
      this.router.navigate(['']);
    },
    error => {
      console.log(error, 'ERROR');
      this.loginIncorrect = true;
    });
  }

}
