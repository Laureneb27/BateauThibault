import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Input() shoppingCart;
    constructor(public router: Router) { }

    navigateTo(routeName) {
        if (routeName == 'check-out') {
            let navigationExtras: NavigationExtras = {
                state: {
                    data: this.shoppingCart
                }
            };
            this.router.navigate([routeName], navigationExtras);
        } else {
            this.router.navigate([routeName]);
        }


    }
    ngOnInit() {
    }

}
