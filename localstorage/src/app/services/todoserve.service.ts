import { Injectable } from '@angular/core';

@Injectable()
export class TodoserveService {

  constructor() {}

  set(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  };
  get(key){
    localStorage.getItem(key);
  }
}


