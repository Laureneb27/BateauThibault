import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeListPage } from './recipe-list.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeListPageRoutingModule {}
