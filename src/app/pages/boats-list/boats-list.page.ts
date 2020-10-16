import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'app-boats-list',
    templateUrl: './boats-list.page.html',
    styleUrls: ['./boats-list.page.scss'],
})
export class BoatsListPage implements OnInit {
    boats;
    constructor(public dataService: DataService, public router: Router) { }

    getBoats() {
        this.dataService.getBoats()
            .subscribe((response) => {
                console.log(response);
                this.boats = response;
            }),
            (error) => {
                console.log('Erreur :' + error)
            }
    }

    openDetailsWithState(id) {
        let navigationExtras: NavigationExtras = {
            state: {
                data: this.boats[id - 1]
            }
        };
        this.router.navigate(['detail'], navigationExtras);
    }

    ngOnInit() {
        this.getBoats();
    }
}
