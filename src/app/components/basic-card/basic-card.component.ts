import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-basic-card',
    templateUrl: './basic-card.component.html',
    styleUrls: ['./basic-card.component.scss'],
})
export class BasicCardComponent implements OnInit {

    @Input() imgName: string;
    @Input() cardName: string;
    @Input() link: string;


    constructor() { }

    ngOnInit() {
        this.imgName = "assets/images/menu/" + this.imgName;
    }

}
