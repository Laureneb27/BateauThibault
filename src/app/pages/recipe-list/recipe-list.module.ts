import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeListPageRoutingModule } from './recipe-list-routing.module';

import { RecipeListPage } from './recipe-list.page';
import { ListCardComponent } from 'src/app/components/list-card/list-card.component';
import { GlobalModule } from 'src/app/modules/global/global.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecipeListPageRoutingModule,
        GlobalModule
    ],
    declarations: [RecipeListPage, ListCardComponent]
})
export class RecipeListPageModule { }
