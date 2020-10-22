import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-total-cart',
    templateUrl: './total-cart.component.html',
    styleUrls: ['./total-cart.component.scss'],
})
export class TotalCartComponent implements OnInit {
    total = 0;

    @Input() event: Event;
    constructor() { }

    calculTotal() {
        this.total = 0;
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.map((value) => {
            this.total += (value.price * value.quantity);
        })
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.calculTotal();
    }

    ngOnInit() {
        this.calculTotal();
    }

}
