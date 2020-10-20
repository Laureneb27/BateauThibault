import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.page.html',
    styleUrls: ['./recipes-list.page.scss'],
})
export class RecipesListPage implements OnInit {
    recipes;
    constructor(public dataService: DataService, public router: Router) { }

    getRecipes() {
        this.dataService.getRecipes()
            .subscribe((response) => {
                console.log(response);
                this.recipes = response;
            }),
            (error) => {
                console.log('Erreur :' + error)
            }
    }

    openDetailsWithState(id) {
        let navigationExtras: NavigationExtras = {
            state: {
                data: this.recipes.filter(recipes => recipes.id == id)[0]
            }
        };
        this.router.navigate(['detail'], navigationExtras);
    }

    ngOnInit() {
        this.getRecipes();
    }
}
