import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NweactivityPage } from '../../pages/nweactivity/nweactivity';
import { Storage } from '@ionic/storage';
import { Screenshot } from '@ionic-native/screenshot';
import { Toast } from '@ionic-native/toast';

@IonicPage()
@Component({
  selector: 'page-orderlist',
  templateUrl: 'orderlist.html',
})
export class OrderlistPage {
  todolist:any[]=[];
  temp:any={title:"",description:"",price:"",note:""};
  
  constructor(public navCtrl: NavController, public storage:Storage, private scr:Screenshot, private toast
    :Toast) {
    this.storage.get('todoDetails').then((val)=>{
      this.todolist=val;
    });
  }
    
ngOnInit() {
  this.storage.get('todoDetails').then((val)=>{
    this.todolist=val;
});
}
ionVieWillEnter(){
  this.storage.get('todoDetails').then((val)=>{
    this.todolist=val;
  });
}

ionViewDidEnter(){
  this.storage.get('todoDetails').then((val)=>{
    this.todolist=val;
  });
}

gotoNweactivity(){
  this.navCtrl.push(NweactivityPage);
}
removeItem(todo){
  let index = this.todolist.indexOf(todo);
  if(index>-1){
    this.todolist.splice(index,1);
    this.storage.set('todoDetails',this.todolist);
  }
}
capture(){
  this.scr.save('jpg',80,'captured.jpg')
    .then(
      (result)=>{
      this.toast.show("Capture success","2000","top")
        .subscribe(); 
      },
      (result)=>{
      this.toast.show("Capture error","2000","bottom")
        .subscribe();
  });
}
}
