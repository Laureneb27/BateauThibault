import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.page.html',
    styleUrls: ['./recipe-list.page.scss'],
})
export class RecipeListPage implements OnInit {
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
