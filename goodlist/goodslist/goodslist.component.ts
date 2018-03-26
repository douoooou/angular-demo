import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 
import { Http,Jsonp } from '@angular/http'; 

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {


  constructor(public router:Router,public http:Http,public jsonp:Jsonp){}  
  list:number[]=[1,2,3,4,5];
  //@Input() list:Array<any>;

  ngOnInit() {
    // this.http.get(' http://datainfo.duapp.com/shopdata/getclass.php').subscribe(data=>{
    //   console.log(JSON.parse(data['_body']));
    //   this.list=JSON.parse(data['_body']);
    // },err=>{
    //   console.log(err);
    // });
// jsonp 只有get
    this.jsonp.get(' http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe(data=>{
      console.log(data['_body']);
      this.list=data['_body'];
    },err=>{
      console.log(err);
    });
  
  }
  goInfo(i){
     this.router.navigate(['/goodsinfo',i]);
  }
}
