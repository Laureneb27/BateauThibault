import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
    selector: 'app-check-out',
    templateUrl: './check-out.page.html',
    styleUrls: ['./check-out.page.scss'],
})
export class CheckOutPage implements OnInit {
    products: any;
    constructor() { }



    ngOnInit() {
        this.products = JSON.parse(localStorage.getItem('cart'));
    }
}
