import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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