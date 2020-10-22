import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-detail-product',
    templateUrl: './detail-product.page.html',
    styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {
    pageData: any;
    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.pageData = this.router.getCurrentNavigation().extras.state.data;
            }
        });
    }
}
