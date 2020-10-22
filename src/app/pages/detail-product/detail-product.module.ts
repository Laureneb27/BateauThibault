import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProductPageRoutingModule } from './detail-product-routing.module';

import { DetailProductPage } from './detail-product.page';
import { GlobalModule } from 'src/app/modules/global/global.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailProductPageRoutingModule,
        GlobalModule
    ],
    declarations: [DetailProductPage]
})
export class DetailProductPageModule { }
