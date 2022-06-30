import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css'],
})
export class StripeComponent implements OnInit {

  constructor(
  ) { }

  public viewport: boolean = true;

  ngAfterViewInit(): void {
    let stripe = Stripe('pk_test_51LBstsFVXdj1FoWdgiU5wFzs5pRAgKn8onmgoSDM9fpzCR13tjH3pOkWxEZpXOo0MfEqlKkETqga8KpblPMQvM9W00eyoLbCVq');
    let elements = stripe.elements();
    let style = {
        base: {
          color: '#004972',
          fontWeight: '400',
          fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
          fontSize: '16px',
          '::placeholder': {
            color: '#004972',
            opacity: '0.5'
          },
        },
        invalid: {
          color: '#F00F1D',
        },
    };


    let card = elements.create("card", { style: style });
    console.log(card)
    card.mount("#card-element");
    card.on('change', (event: any | undefined) => {
      var displayError = document.getElementById('card-errors');
      if (event.error ) {
        document.querySelector('.form-row #card-errors')!.classList.value = 'alert alert-danger pt-2'
        displayError!.textContent = event!.error.message;
      } else {
        displayError!.textContent = '';
        document.querySelector('.form-row #card-errors')!.classList.value = ''
      }
    });

    
}

  ngOnInit(): void {
  }

}
