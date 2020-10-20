import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-check-out',
    templateUrl: './check-out.page.html',
    styleUrls: ['./check-out.page.scss'],
})
export class CheckOutPage implements OnInit {
    products: any;
    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.products = this.router.getCurrentNavigation().extras.state.data;
            }
        });
    }

    // product = {
    //     "id": 12,
    //     "name": "Aile de raie",
    //     "category": 0,
    //     "price": 10.0,
    //     "unit": "kg",
    //     "availability": true,
    //     "sale": false,
    //     "discount": 0.0,
    //     "comments": "Pêche à la corde",
    //     "owner": "tig"
    // }

    // productNumber = 0;

}
