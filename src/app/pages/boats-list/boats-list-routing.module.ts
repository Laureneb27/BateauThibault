import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoatsListPage } from './boats-list.page';

const routes: Routes = [
    {
        path: '',
        component: BoatsListPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BoatsListPageRoutingModule { }
