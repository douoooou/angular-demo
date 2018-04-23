import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MsdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-msdetail',
  templateUrl: 'msdetail.html',
})
export class MsdetailPage {
   item;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    let name = navParams.get('name');
    // console.log(name);
    this.item=name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsdetailPage');
  }

}
