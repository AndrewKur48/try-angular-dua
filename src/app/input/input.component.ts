import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  tempnam = "";
  temppen = "";
  constructor(private router :Router) { }

  ngOnInit() {

  }
  sInput(nam,pen){
    this.tempnam = nam;
    this.temppen = pen;
    this.router.navigate(['/list',this.tempnam,this.temppen]);
  }

}