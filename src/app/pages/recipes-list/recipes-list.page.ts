import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.page.html',
    styleUrls: ['./recipes-list.page.scss'],
})
export class RecipesListPage implements OnInit {
    recipes;
    constructor(public dataService: DataService) { }

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

    ngOnInit() {
        this.getRecipes();
    }

}
