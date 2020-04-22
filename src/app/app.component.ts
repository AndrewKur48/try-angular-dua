import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private router :Router) {}
  goInput(){
    this.router.navigate(['/input']);
  }
  goEdit(){
    this.router.navigate(['/edit']);
  }
  goList(){
    this.router.navigate(['/list']);
  }
}
