import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantsListPageRoutingModule } from './restaurants-list-routing.module';

import { RestaurantsListPage } from './restaurants-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantsListPageRoutingModule
  ],
  declarations: [RestaurantsListPage]
})
export class RestaurantsListPageModule {}
