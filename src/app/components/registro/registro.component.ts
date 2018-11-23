import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public user: User;

  constructor() {
    this.user = new User('', '', '', '', 0);
  }

  ngOnInit() {
  }

  onSubmit(formRegistro: NgForm) {
    console.log('Has pulsado el botón de ENVIAR');
    console.log(this.user, ' <<<< Usuario');
    formRegistro.reset();
  }

  checkUsername() {
    if (this.user.username !== '' && this.user.username !== undefined) {
      console.log(this.user.username, '<<< USERNAME');
      // Hacer llamada a API para comprobar que no hay username repetidos en DB
    }
  }
}
