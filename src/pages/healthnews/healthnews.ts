import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the HealthnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-healthnews',
  templateUrl: 'healthnews.html',
})
export class HealthnewsPage {
  healthnews:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) 
  {
    //Get API
    this.http.get('http://newsapi.org/v2/top-headlines?country=th&category=health&apiKey=bb18818c3df7477bbe2b608146975e03').map(res=>res.json()).subscribe(data=>{
      this.healthnews=data.articles;
      console.log(this.healthnews);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthnewsPage');
  }
gotoDetail(item:any){
  this.navCtrl.push(DetailPage,{item:item})
}
}
