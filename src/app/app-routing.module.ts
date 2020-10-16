import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'restaurants-list',
        loadChildren: () => import('./pages/restaurants-list/restaurants-list.module').then(m => m.RestaurantsListPageModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactPageModule)
    },
    {
        path: 'boats-list',
        loadChildren: () => import('./pages/boat-list/boat-list.module').then(m => m.BoatListPageModule)
    },
    {
        path: 'recipes-list',
        loadChildren: () => import('./pages/recipe-list/recipe-list.module').then(m => m.RecipeListPageModule)
    },


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
