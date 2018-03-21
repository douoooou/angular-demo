import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent implements OnInit {

  constructor() { }

  @Input() inputxt;

  @Output() getText = new EventEmitter( );	

  add(){
    this.getText.emit("data");
  }


  ngOnInit() {
  }

}
