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

    ngOnInit() { }

    addQty(product) {
        this.shoppingCartService.addQty(product);
        product.quantity++;
        this.updateEmitter.emit();

    }

    removeQty(product) {
        this.shoppingCartService.removeQty(product);
        product.quantity--;
        this.updateEmitter.emit();
    }

}
