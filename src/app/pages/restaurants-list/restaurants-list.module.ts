import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantsListPageRoutingModule } from './restaurants-list-routing.module';
import { RestaurantsListPage } from './restaurants-list.page';
import { GlobalModule } from 'src/app/modules/global/global.module';
import { ListCardComponent } from 'src/app/components/list-card/list-card.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RestaurantsListPageRoutingModule,
        GlobalModule,

    ],
    declarations: [RestaurantsListPage, ListCardComponent]
})
export class RestaurantsListPageModule { }
