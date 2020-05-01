import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {GlobService} from '../glob.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  hasil = [];
  temp = [];
  co = 0;
  nam = "";
  pen = "";
  constructor(private route : ActivatedRoute, public variableglobal : GlobService) {
   }

  ngOnInit() {
    try{
    let tempnam = this.route.snapshot.paramMap.get('nam');
    this.nam = tempnam;
    let temppen = this.route.snapshot.paramMap.get('pen');
    this.pen = temppen;
    this.temp.push(this.nam);
    this.temp.push(this.pen);
    // this.hasil.push(this.temp);
    if(this.nam  != ""){
      if(this.pen != ""){
        this.variableglobal.addData(this.temp);
      }
    }

    }
    catch{

    }
    this.hasil = this.variableglobal.getData();
  }



}