import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

    @Input() product: object;
    constructor(public shoppingCartService: ShoppingCartService,) { }
    addToCart(event) {
        event.stopPropagation();

        this.shoppingCartService.addToCart(this.product);
    }
    ngOnInit() { }

}
