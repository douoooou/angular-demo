import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Generated class for the FindpsdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-findpsd',
  templateUrl: 'findpsd.html',
})
export class FindpsdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindpsdPage');
  }
  confirm(){
    this.navCtrl.push(LoginPage,this.navParams);
  }
}
