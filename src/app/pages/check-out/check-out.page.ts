import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.page.html',
  styleUrls: ['./check-out.page.scss'],
})
export class CheckOutPage implements OnInit {

  product = {
    "id": 12,
    "name": "Aile de raie",
    "category": 0,
    "price": 10.0,
    "unit": "kg",
    "availability": true,
    "sale": false,
    "discount": 0.0,
    "comments": "Pêche à la corde",
    "owner": "tig"
  }

  productNumber = 0;

  constructor() { }

  ngOnInit() {
  }

}
