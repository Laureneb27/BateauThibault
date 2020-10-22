import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-total-cart',
    templateUrl: './total-cart.component.html',
    styleUrls: ['./total-cart.component.scss'],
})
export class TotalCartComponent implements OnInit {
    total = 0;
    constructor() { }

    ngOnInit() {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.map((value) => {
            this.total += (value.price * value.quantity);
        })
    }

}
