import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';

  data:string
  dataArr=[];

  idx:number;
  getI(ww){
    this.idx=ww;
  }
  add(){
    this.dataArr.push(this.data);
    this.data="";
 }
}
