import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoatListPageRoutingModule } from './boat-list-routing.module';

import { BoatListPage } from './boat-list.page';
import { GlobalModule } from 'src/app/modules/global/global.module';
import { ListCardComponent } from 'src/app/components/list-card/list-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BoatListPageRoutingModule,
        GlobalModule
    ],
    declarations: [BoatListPage, ListCardComponent]
})
export class BoatListPageModule { }
