import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'app-boat-list',
    templateUrl: './boat-list.page.html',
    styleUrls: ['./boat-list.page.scss'],
})
export class BoatListPage implements OnInit {
    boats;
    constructor(public dataService: DataService) { }

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

    ngOnInit() {
        this.getBoats();
    }


}
