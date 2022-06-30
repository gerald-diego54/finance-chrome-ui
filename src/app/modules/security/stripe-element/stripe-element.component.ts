import { Component, NgZone, OnInit } from '@angular/core';
declare var Stripe: any;

@Component({
  selector: 'app-stripe-element',
  templateUrl: './stripe-element.component.html',
  styleUrls: ['./stripe-element.component.css']
})
export class StripeElementComponent implements OnInit {

  constructor(
    private _zone: NgZone
  ) { }

  public error_validation: boolean = false;
  public data_class: any;
  public hidden: boolean = false;

  ngOnInit(): void {
  }

}
