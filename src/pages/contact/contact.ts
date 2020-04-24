import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  allcontact = [
    {
      id:1,
      name:"Amazon ประปานครปฐม",
      phone:"0621536364",
      image:"assets/imgs/01.jpg",
    },
    {
      id:2,
      name:"Amazon หน้าอำเภอนครปฐม",
      phone:"0611111111",
      image:"assets/imgs/02.jpg",
    },
    {
    id:3,
    name:"Amazon สามความเผือก",
    phone:"0622222222",
    image:"assets/imgs/03.jpg",
  },
  {
    id:4,
    name:"Amazon ธรรมศาลา",
    phone:"0633333333",
    image:"assets/imgs/04.jpg",
  },
  {
    id:5,
    name:"Amazon ซอย 4 นครปฐม",
    phone:"0655555555",
    image:"assets/imgs/05.jpg",
  },
  ];
 
}

