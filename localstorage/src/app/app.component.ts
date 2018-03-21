import { Component } from '@angular/core';
import { TodoserveService} from './services/todoserve.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
 
  data:string
  dataArr=[];
 i:number
  idx:number;
  getI(ww){
    this.idx=ww;
  }
  add(){
    this.dataArr.push(this.data);
      
    this.data="";   
  }
  

}
