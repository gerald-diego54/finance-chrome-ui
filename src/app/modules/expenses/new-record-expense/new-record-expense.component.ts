import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-new-record-expense',
  templateUrl: './new-record-expense.component.html',
  styleUrls: ['./new-record-expense.component.sass']
})
export class NewRecordExpenseComponent implements OnInit {

  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig
  ) { }

  public newRecordExpense: boolean = true;
  public noSetLabel: boolean = true;
  public notConfig: boolean = this.config.data.dialogDataRenderModal;

  public closeRecordExpenseDialog(): void {
    this.ref.close();
  }

  public showSetLabel(): void {
    this.newRecordExpense = false;
  }

  public showNewRecord(): void {
    this.newRecordExpense = true;
  }

  ngOnInit(): void {
    // console.log(this.config.data.dialogDataRenderModal);
  }

}
