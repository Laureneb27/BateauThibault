import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.page.html',
    styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage implements OnInit {
    products;
    productFilter;
    categoriesNames = [];
    segment: string;

    constructor(public dataService: DataService, public router: Router) {
        this.segment = "all";
    }

    getProducts() {
        this.dataService.getProducts()
            .subscribe((response) => {
                console.log(response);
                this.products = response;
                this.productFilter = response;
                this.setCategories();

            }),
            (error) => {
                console.log('Erreur :' + error)
            }
    }
    setCategories() {
        console.log(this.products);
        let categories = [];
        this.products.forEach(element => {
            if (!categories.includes(element.category)) {
                categories.push(element.category);
                switch (element.category) {
                    case 0:
                        this.categoriesNames.push({ id: element.category, name: 'Poissons', img: 'fish-outline' });
                        break;
                    case 1:
                        this.categoriesNames.push({ id: element.category, name: 'Huitres', img: 'apps-outline' });
                        break;
                    case 2:
                        this.categoriesNames.push({ id: element.category, name: 'Crustacés', img: 'apps-outline' });
                        break;
                    default:
                        this.categoriesNames.push({ id: element.category, name: 'Autres', img: 'apps-outline' });
                        break;
                }
            }
        });
        console.log(this.categoriesNames);

    }
    segmentChanged(ev: any) {
        if (ev.detail.value == 'all') {
            this.productFilter = this.products;
        } else {
            this.productFilter = this.products.filter(product => product.category == ev.detail.value);
        }
    }

    openDetailsWithState(id) {
        console.log();
        let navigationExtras: NavigationExtras = {
            state: {
                data: this.products.filter(product => product.id == id)[0]
            }
        };
        this.router.navigate(['detail-product'], navigationExtras);
    }
    ngOnInit() {
        this.getProducts();
    }

}
