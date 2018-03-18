import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListboxComponent implements OnInit {

  constructor() { }
  
  @Input() dataArr:Array<any>;

  @Output() getText = new EventEmitter( );	
  
  ngOnInit() {
  }

  data:string
  dataA=[];
  changeData(i){
    this.dataA.push(this.dataArr[i]);
    this.dataArr.splice(i,1);//从第几个，删几个
  }
  changeDataa(i){
    this.dataArr.push(this.dataA[i]);
    this.dataA.splice(i,1);
    //从第几个，删几个
  }
  deleData(i){
     this.dataArr.splice(i,1);
  }
  deletData(i){
    this.dataA.splice(i,1);
 }

  fn(i){
    this.getText.emit(i);
  }
}
