import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
    selector: 'app-checkout-card',
    templateUrl: './checkout-card.component.html',
    styleUrls: ['./checkout-card.component.scss'],
})
export class CheckoutCardComponent implements OnInit {

    @Input() product: object;
    @Output() deleteEmitter = new EventEmitter<number>();
    @Output() updateEmitter = new EventEmitter();
    constructor(public shoppingCartService: ShoppingCartService, private router: Router) { }

    // addQty(product) {
    //     this.shoppingCartService.addQty(product);
    //     product.quantity++;
    //     this.updateEmitter.emit();
    // }

    // removeQty(product) {
    //     this.shoppingCartService.removeQty(product);
    //     product.quantity--;
    //     this.updateEmitter.emit();
    // }

    updateValue(val: number) {
        this.updateEmitter.emit();
    }
    deleteProduct(product) {
        this.shoppingCartService.deleteProduct(product);
        this.deleteEmitter.emit(product.id);
    }
    navigate() {
        this.router.navigate(['/checkpoint'])
    }


    ngOnInit() { }

}
