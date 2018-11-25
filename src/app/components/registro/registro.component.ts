import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from '../../shared/services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public user: User;
  usernameDuplicated = false;
  passwordsDuplicated = true;
  registerSuccess = false;

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

  constructor(private regConex: RegistroService) {
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

    console.log(this.user.birthdate, 'BIRTHDATE');

    this.checkPasswords(this.user.password, this.user.passwordRepeated);
    console.log(this.usernameDuplicated, 'Usuerio duplicado?');
    console.log(this.passwordsDuplicated, 'Passwords iguales?');
    if (!this.usernameDuplicated && this.passwordsDuplicated) {
      console.log('HACER POST');
      /*this.regConex.postUser(this.user).subscribe(
        (response) => {
          console.log(response, 'RESPUESTA');
        },
        (error) => {
          console.log(error, 'ERROR');
        }
      );*/
      formRegistroSubmitted.reset();
      this.registerSuccess = true;
    } else {
      console.log('NO HACER POST');
      this.registerSuccess = false;
    }
  }

  checkUsername(formRegistro) {
    this.registerSuccess = false;
    this.regConex.getAnUser(formRegistro.get('username').value).subscribe(
      (response) => {
          console.log(response, 'RESPUESTA');
          this.usernameDuplicated = true;
      },
      (error) => {
        console.log(error, 'ERROR');
        this.usernameDuplicated = false;
      }
    );
  }

  checkPasswords(password: string, passwordRepeated: string) {
    if (password === passwordRepeated) {
      this.passwordsDuplicated = true;
    } else {
      this.passwordsDuplicated = false;
    }
  }

  /*addUser(user) {
    this.regConex.postUser(user).subscribe(
      (response) => {
        console.log(response, 'RESPUESTA');
      },
      (error) => {
        console.log(error, 'ERROR');
      }
    );
  }*/
}
