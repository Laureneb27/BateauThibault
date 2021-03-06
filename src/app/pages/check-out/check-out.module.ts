import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckOutPageRoutingModule } from './check-out-routing.module';

import { CheckOutPage } from './check-out.page';
import { GlobalModule } from 'src/app/modules/global/global.module';
import { CheckoutCardComponent } from 'src/app/components/checkout-card/checkout-card.component';
import { TotalCartComponent } from 'src/app/components/total-cart/total-cart.component';
import { QtyCounterComponent } from 'src/app/components/qty-counter/qty-counter.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckOutPageRoutingModule,
        GlobalModule
    ],
    declarations: [CheckOutPage, CheckoutCardComponent, TotalCartComponent, QtyCounterComponent]
})
export class CheckOutPageModule { }
