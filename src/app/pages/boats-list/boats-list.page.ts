import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'app-boats-list',
    templateUrl: './boats-list.page.html',
    styleUrls: ['./boats-list.page.scss'],
})
export class BoatsListPage implements OnInit {
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
