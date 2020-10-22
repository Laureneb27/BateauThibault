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
        path: 'boats-list',
        loadChildren: () => import('./pages/boats-list/boats-list.module').then(m => m.BoatsListPageModule)
    },
    {
        path: 'recipes-list',
        loadChildren: () => import('./pages/recipes-list/recipes-list.module').then(m => m.RecipesListPageModule)
    },
    {
        path: 'products-list',
        loadChildren: () => import('./pages/products-list/products-list.module').then(m => m.ProductsListPageModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactPageModule)
    },

    {
        path: 'detail',
        loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailPageModule)
    },
    {
        path: 'check-out',
        loadChildren: () => import('./pages/check-out/check-out.module').then(m => m.CheckOutPageModule)
    },
    {
        path: 'detail-product',
        loadChildren: () => import('./pages/detail-product/detail-product.module').then(m => m.DetailProductPageModule)
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
