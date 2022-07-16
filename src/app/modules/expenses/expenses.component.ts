import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Sidebar } from 'primeng/sidebar';
import { NewRecordExpenseComponent } from './new-record-expense/new-record-expense.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.sass'],
  providers: [DialogService, MessageService]
})
export class ExpensesComponent implements OnInit {

  constructor(
    public dialogService: DialogService, 
    public messageService: MessageService
  ) { }

  public viewport: boolean = true;
  public basicData: any;
  public basicOptions: any;
  public ref: any;
  public labels: any = {
    actual: 'Actual Expense', 
    expected: 'Expected Expense'
  }
  public days: any = [
    'Day 1', 
    'Day 2', 
    'Day 3', 
    'Day 4', 
    'Day 5', 
    'Day 6', 
    'Day 7', 
    'Day 8', 
    'Day 9', 
    'Day 10', 
    'Day 11', 
    'Day 12',
    'Day 13',
    'Day 14',
    'Day 15',
    'Day 16', 
    'Day 17', 
    'Day 18', 
    'Day 19', 
    'Day 20', 
    'Day 21', 
    'Day 22', 
    'Day 23', 
    'Day 24', 
    'Day 25', 
    'Day 26', 
    'Day 27',
    'Day 28',
    'Day 29',
    'Day 30',
    'Day 31'
  ];


  public ChartData(): void {
    this.basicData = {
      labels: this.days,
      datasets: [
          {
              label: this.labels.actual,
              data: [null],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
          {
              label: this.labels.expected,
              data: [null],
              fill: false,
              borderColor: '#FFA726',
              tension: .4
          },
      ]
    };

    this.basicOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
  };
}

public showNewRecordDialog(): void {
  this.ref = this.dialogService.open(NewRecordExpenseComponent, {
    width: '60%',
    baseZIndex: 10000,
    closable: false,
    showHeader: false,
    data: {
      dialogDataRenderModal: false,
    }
  });

  this.ref.onClose.subscribe();
}

public showConfigDialog(): void {
  this.ref = this.dialogService.open(NewRecordExpenseComponent, {
    width: '60%',
    baseZIndex: 10000,
    closable: false,
    showHeader: false,
    data: {
      dialogDataRenderModal: true
    }
  });

  this.ref.onClose.subscribe();
}

  ngOnInit(): void {
    this.ChartData();
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
}

}
