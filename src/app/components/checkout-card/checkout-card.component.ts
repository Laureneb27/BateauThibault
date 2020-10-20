import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.scss'],
})
export class CheckoutCardComponent implements OnInit {

  @Input() product: object;
  @Input() productNumber: number;
  constructor() { }

  ngOnInit() { }

}
