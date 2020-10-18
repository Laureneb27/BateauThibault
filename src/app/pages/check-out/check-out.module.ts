import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckOutPageRoutingModule } from './check-out-routing.module';

import { CheckOutPage } from './check-out.page';
import { GlobalModule } from 'src/app/modules/global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckOutPageRoutingModule,
    GlobalModule
  ],
  declarations: [CheckOutPage]
})
export class CheckOutPageModule { }
