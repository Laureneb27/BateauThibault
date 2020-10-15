import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-card',
    templateUrl: './home-card.component.html',
    styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {

    @Input() imgName: string;
    @Input() cardName: string;
    @Input() id: string;

    constructor() { }

    ngOnInit() {
        this.imgName = "assets/images/menu/" + this.imgName;
    }

}
