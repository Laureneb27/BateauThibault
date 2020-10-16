import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoatListPage } from './boat-list.page';

const routes: Routes = [
  {
    path: '',
    component: BoatListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoatListPageRoutingModule {}
