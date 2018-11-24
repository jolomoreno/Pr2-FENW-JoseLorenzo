import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public user: User;
  usernameDuplicated = false;
  passwordsDuplicated = true;

  formRegistro = new FormGroup({
    username: new FormControl('',
      [Validators.required]),
    password: new FormControl('',
      [Validators.required]),
    passwordRepeated: new FormControl('',
      [Validators.required]),
    email: new FormControl('',
      [Validators.required, Validators.email]),
    birthdate: new FormControl('2018-11-24')
  });

  constructor() {
    this.user = new User('', '', '', '', 0);
  }

  get f() { return this.formRegistro.controls; }

  ngOnInit() {}

  onSubmit(formRegistroSubmitted: FormGroup) {
    console.log('Has pulsado el botón de ENVIAR');
    this.user.username = formRegistroSubmitted.get('username').value;
    this.user.password = formRegistroSubmitted.get('password').value;
    this.user.passwordRepeated = formRegistroSubmitted.get('passwordRepeated').value;
    this.user.email = formRegistroSubmitted.get('email').value;
    this.user.birthdate = formRegistroSubmitted.get('birthdate').value;

    /*console.log(this.user.username, 'USERNAME-SUBMIT');
    console.log(this.user.password, 'PASSWORD-SUBMIT');
    console.log(this.user.passwordRepeated, 'PASSREPEATED-SUBMIT');
    console.log(this.user.email, 'EMAIL-SUBMIT');
    console.log(this.user.birthdate, 'BIRTHDATE-SUBMIT');*/

    this.checkPasswords(this.user.password, this.user.passwordRepeated, formRegistroSubmitted);
  }

  checkUsername(formRegistro) {
    /*console.log('Has hecho BLUR del input de USER');
    console.log(formRegistro.get('username').value, 'USERNAME-BLUR');*/
    // Buscar el username en DB
    if (formRegistro.get('username').value === 'Paco') {
      console.log('SON IGUALES!!!');
      this.usernameDuplicated = true;
    } else {
      console.log('NO SON IGUALES!!!');
      this.usernameDuplicated = false;
    }
  }

  checkPasswords(password: string, passwordRepeated: string, formRegistroSubmitted: FormGroup) {
    console.log(password, 'PASSWORD-SUBMIT');
    console.log(passwordRepeated, 'PASSREPEATED-SUBMIT');
    if (password === passwordRepeated) {
      console.log('SON IGUALES!!!');
      // formRegistroSubmitted.reset();
      this.passwordsDuplicated = true;
    } else {
      console.log('NO SON IGUALES');
      this.passwordsDuplicated = false;
    }
    console.log(this.passwordsDuplicated, 'passwordsDuplicated');

  }
}
