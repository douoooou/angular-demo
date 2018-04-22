import { Component } from '@angular/core';
import { NavController, InfiniteScroll } from 'ionic-angular';
// 轮播图
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  search:string="infor";
  items = [];
  constructor(public navCtrl: NavController) {
    for (var i = 0; i < 3; i++) {
      this.items.push( this.items.length );
    }    
  }
  doInfinite(infiniteScroll): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 15; i++) {
          this.items.push( this.items.length );
        }

        console.log('Async operation has ended');
        // resolve();
        // infiniteScroll.complete();
        infiniteScroll.enable();
      }, 500);
    })
  }
    

}