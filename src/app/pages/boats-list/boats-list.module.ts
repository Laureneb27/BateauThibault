import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoatsListPageRoutingModule } from './boats-list-routing.module';

import { BoatsListPage } from './boats-list.page';
import { GlobalModule } from 'src/app/modules/global/global.module';
import { ListCardComponent } from 'src/app/components/list-card/list-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BoatsListPageRoutingModule,
        GlobalModule
    ],
    declarations: [BoatsListPage, ListCardComponent]
})
export class BoatsListPageModule { }
