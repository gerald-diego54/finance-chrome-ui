import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.sass']
})
export class ExpensesComponent implements OnInit {

  constructor() { }

  public viewport: boolean = true;

  public tableSorts (): void {
    
  }

  ngOnInit(): void {
  }

}
