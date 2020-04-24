import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AmazonProvider } from '../../providers/amazon/amazon';
import { DessertdetailPage } from '../../pages/dessertdetail/dessertdetail';

@IonicPage()
@Component({
  selector: 'page-dessertmenu',
  templateUrl: 'dessertmenu.html',
})
export class DessertmenuPage {
  dessert:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:AmazonProvider) {
    this.data.loaddessert().then(result=>{
      this.dessert=result;
      console.log(result);
    });
  }

  
  showDetal(id){
    this.navCtrl.push(DessertdetailPage,{code:id});
  }

  goToDessertdetailPage(dessert_id:any){
   
    this.navCtrl.push(DessertdetailPage,{ id:dessert_id });
  }

}
 