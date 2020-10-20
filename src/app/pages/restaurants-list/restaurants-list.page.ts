import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'app-restaurants-list',
    templateUrl: './restaurants-list.page.html',
    styleUrls: ['./restaurants-list.page.scss'],
})
export class RestaurantsListPage implements OnInit {
    restaurants;
    constructor(public dataService: DataService, public router: Router) { }

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

    openDetailsWithState(id) {
        let navigationExtras: NavigationExtras = {
            state: {
                data: this.restaurants.filter(restaurants => restaurants.id == id)[0]
            }
        };
        this.router.navigate(['detail'], navigationExtras);
    }

    ngOnInit() {
        this.getRestaurants();
    }
}
