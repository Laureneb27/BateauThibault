import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsListPageRoutingModule } from './products-list-routing.module';

import { ProductsListPage } from './products-list.page';
import { GlobalModule } from 'src/app/modules/global/global.module';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductsListPageRoutingModule, GlobalModule
    ],
    declarations: [ProductsListPage, ProductCardComponent]
})
export class ProductsListPageModule { }
