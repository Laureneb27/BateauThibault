import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
    selector: 'app-checkout-card',
    templateUrl: './checkout-card.component.html',
    styleUrls: ['./checkout-card.component.scss'],
})
export class CheckoutCardComponent implements OnInit {

    @Input() product: object;
    @Input() productNumber: number;
    constructor(public shoppingCartService: ShoppingCartService, private router: Router) { }

    addQty(product) {
        this.shoppingCartService.addQty(product);
    }

    removeQty(product) {
        this.shoppingCartService.removeQty(product);
    }

    deleteProduct(product) {
        this.shoppingCartService.deleteProduct(product);
    }
    navigate() {
        this.router.navigate(['/checkpoint'])
    }


    ngOnInit() { }

}
