import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesListPageRoutingModule } from './recipes-list-routing.module';

import { RecipesListPage } from './recipes-list.page';
import { ListCardComponent } from 'src/app/components/list-card/list-card.component';
import { GlobalModule } from 'src/app/modules/global/global.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecipesListPageRoutingModule,
        GlobalModule
    ],
    declarations: [RecipesListPage, ListCardComponent]
})
export class RecipesListPageModule { }
