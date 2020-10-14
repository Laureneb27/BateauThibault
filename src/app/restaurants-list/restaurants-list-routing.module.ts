import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsListPage } from './restaurants-list.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsListPageRoutingModule {}
