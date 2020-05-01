import { Injectable } from '@angular/core';

@Injectable()
export class GlobService {
  data = [];
  constructor() { }
  public addData(da){
    this.data.push(da);
  }
  public getData(){
    return this.data;
  }
  public editData(a,b){
    for(let i = 0;i<this.data.length;i++){
      if(this.data[i][0] == a){
        this.data[i][1] = b;
      }
    }
  }
}