import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MsdetailPage } from '../msdetail/msdetail';


@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }
  msdetail(){
    this.navCtrl.push(MsdetailPage,{
      name: "教授"
    });
  }
  // msdetail(username){
  //   this.navCtrl.push(MsdetailPage,{
  //     name: username.value
  //   });
  // }

}
