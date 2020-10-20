import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

    @Input() product: object;
    @Input() shoppingCart: Array<any>;
    constructor() { }
    addToCart(event, id) {
        let thisProductAlreadyInCart = this.shoppingCart.filter(product => product.idProduct == id);
        if (thisProductAlreadyInCart.length == 0) {
            this.shoppingCart.push({
                'idProduct': id, 'quantity': 1
            })
        } else {
            thisProductAlreadyInCart[0].quantity++;
        }
        event.stopPropagation();
    }
    ngOnInit() { }

}
