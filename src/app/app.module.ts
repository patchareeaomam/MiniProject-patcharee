import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DrinkmenuPage } from '../pages/drinkmenu/drinkmenu';
import { DessertmenuPage } from '../pages/dessertmenu/dessertmenu';
import { HealthnewsPage } from '../pages/healthnews/healthnews';
import { DetailPage } from '../pages/detail/detail';
import { HttpModule } from '@angular/http';
import { ContactPage } from '../pages/contact/contact';
import { AmazonProvider } from '../providers/amazon/amazon';
import { DrinkmenudetailPage } from '../pages/drinkmenudetail/drinkmenudetail';
import { DessertdetailPage } from '../pages/dessertdetail/dessertdetail';
import { HttpClientModule } from '@angular/common/http';
import { OrderlistPage } from '../pages/orderlist/orderlist';
import { IonicStorageModule } from '@ionic/storage'
import { NweactivityPage } from '../pages/nweactivity/nweactivity';
import { Screenshot } from '@ionic-native/screenshot';
import { Toast } from '@ionic-native/toast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DrinkmenuPage,
    DessertmenuPage,
    HealthnewsPage,
    DetailPage,
    ContactPage,
    DrinkmenudetailPage,DessertdetailPage,
    OrderlistPage,NweactivityPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DrinkmenuPage,
    DessertmenuPage,
    HealthnewsPage,
    DetailPage,
    ContactPage,
    DrinkmenudetailPage,DessertdetailPage,
    OrderlistPage,NweactivityPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AmazonProvider,
    Screenshot,
    Toast
  ]
})
export class AppModule {}
