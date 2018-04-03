import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http} from "@angular/http";
import { Headers } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/Rx";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public http:Http) {

  }
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  account='';
  password='';
  
  login(){
    console.log('a');
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',{status:'login',userID:this.account,password:this.password}, 
    {headers:this.headers} ).subscribe(
      data=>{
        console.log(data['_body'].status);
        if(data['_body'].status==0){
           alert('用户名不存在');
        }else if(data['_body'].status==1){
          alert('用户名和密码不符');
        }else{
          console.log(data);
          // window.location.href="h.html";
        }
      },err=>{
        console.log(err);
      });
  }
 

}

// switch(data){
//   case 2:  
//      info.innerHTML="用户名和密码不符";        
//      break;
//   case 0:
//      info.innerHTML="用户名不存在";     
//      break; 
//   default: 
//       var text=document.getElementById('account').value;
//       localStorage.setItem("accountname",text);
//       console.log(localStorage.getItem("accountname"));                 
//       window.location="mine.html";            
//       break;

