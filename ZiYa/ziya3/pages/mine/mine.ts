import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { RepostPage } from '../repost/repost';
import { SettingPage } from '../setting/setting';
/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {
  // }
  
  // takephoto(){
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }  
  //   this.camera.getPicture(options).then((imageData) => {
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     // this.imgSrc=base64Image;
  //    }, (err) => {
  //    });    
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
  }
  repost(){
    this.navCtrl.push(RepostPage,this.navParams);
  }
  setting(){
    this.navCtrl.push(SettingPage,this.navParams);
  }

}
