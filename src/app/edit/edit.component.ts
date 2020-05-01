import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GlobService} from '../glob.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  tempnam = "";
  temppen = "";
  cekData;
  constructor(private router :Router, public variableglobal : GlobService) { }

  ngOnInit() {
    this.cekData = this.variableglobal.getData();
  }
  sEdit(nam,pen){
    this.tempnam = nam;
    this.temppen = pen;
    this.variableglobal.editData(this.tempnam,this.temppen);
    this.router.navigate(['/list',"",""]);
  }
}