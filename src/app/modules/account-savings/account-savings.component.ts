import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-savings',
  templateUrl: './account-savings.component.html',
  styleUrls: ['./account-savings.component.sass'],
})
export class AccountSavingsComponent implements OnInit {

  constructor() { }

  public viewport: boolean = true;
  public displayModal: boolean = false;
  public displayCompanyLabels: boolean = false;

  public closeAccountSavingsDialog(): void {
    this.displayModal = false;
  }

  public showSetLabelCompany(): void {
    this.displayCompanyLabels = false
  }

  public closeSetLabelCompanyDialog(): void {
    this.displayCompanyLabels = false;
  }

  ngOnInit(): void {
  }

}
