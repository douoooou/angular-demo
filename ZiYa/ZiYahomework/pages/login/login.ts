import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { FindpsdPage } from '../findpsd/findpsd';
// import { Http} from "@angular/http";
// import { Headers } from "@angular/http";
// import { Observable } from "rxjs";
// import "rxjs/Rx";



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  reg(){
    this.navCtrl.push(RegisterPage,this.navParams);
  }

  findpsd(){
    this.navCtrl.push(FindpsdPage,this.navParams);
  }
  // headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  // account='';
  // password='';
  
  // login(){
  //   console.log('a');
  //   this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',{status:'login',userID:this.account,password:this.password}, 
  //   {headers:this.headers} ).subscribe(
  //     data=>{
  //       console.log(data['_body'].status);
  //       if(data['_body'].status==0){
  //          alert('用户名不存在');
  //       }else if(data['_body'].status==1){
  //         alert('用户名和密码不符');
  //       }else{
  //         console.log(data);
  //         // window.location.href="h.html";
  //       }
  //     },err=>{
  //       console.log(err);
  //     });
  // }
 

}
