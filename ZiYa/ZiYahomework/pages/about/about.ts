import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RepostdetailPage } from '../repostdetail/repostdetail';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public navParams: NavParams) {

  }
  rdetail(){
    this.navCtrl.push(RepostdetailPage,this.navParams);
  }

}
