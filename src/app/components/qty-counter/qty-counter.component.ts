import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
    selector: 'app-qty-counter',
    templateUrl: './qty-counter.component.html',
    styleUrls: ['./qty-counter.component.scss'],
})
export class QtyCounterComponent implements OnInit {
    @Input() product;
    @Output() updateEmitter = new EventEmitter();

    constructor(public shoppingCartService: ShoppingCartService) { }

    ngOnInit() {
        let element = this.shoppingCartService.getQty(this.product);
        console.log(this.shoppingCartService.getQty(this.product));
        if (!element || element.length == 0) {
            this.product.quantity = 0;
        }
        else {
            this.product.quantity = element[0].quantity;
        }
    }

    addQty(product) {
        if (product.quantity) {
            this.shoppingCartService.addQty(product);
            product.quantity++;
        }
        else {
            this.shoppingCartService.addToCart(product);
        }

        this.updateEmitter.emit();
    }

    removeQty(product) {
        this.shoppingCartService.removeQty(product);
        product.quantity--;
        this.updateEmitter.emit();
    }

}
