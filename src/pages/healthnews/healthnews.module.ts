import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthnewsPage } from './healthnews';

@NgModule({
  declarations: [
    HealthnewsPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthnewsPage),
  ],
})
export class HealthnewsPageModule {}
