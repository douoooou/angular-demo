import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ModalController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {

  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SettingPage');
  }
  quit(){
    this.navCtrl.push(LoginPage,this.navParams);
  }

}
class Profile {

  constructor(public viewCtrl: ViewController) {
 
  }
 
  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
 
 }
