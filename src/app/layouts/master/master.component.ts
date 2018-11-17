import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    $(document).ready(function () {
      console.log('Entra a Master component');
    });
  }
}
