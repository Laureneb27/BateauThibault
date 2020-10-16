import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'app-restaurants-list',
    templateUrl: './restaurants-list.page.html',
    styleUrls: ['./restaurants-list.page.scss'],
})
export class RestaurantsListPage implements OnInit {
    restaurants;
    constructor(public dataService: DataService) { }

    getRestaurants() {
        this.dataService.getRestaurants()
            .subscribe((response) => {
                console.log(response);
                this.restaurants = response;
            }),
            (error) => {
                console.log('Erreur :' + error)
            }
    }

    ngOnInit() {
        this.getRestaurants();
    }

}
