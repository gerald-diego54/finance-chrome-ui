import { Component, NgZone, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
// import { * } 'stripe-v3'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

    public hour: any;
    public minutes: any;
    public seconds: any;
    public status: any;
    public viewport: boolean = true;
    public basicData: any;
    public basicOptions: any;
    public monthly: boolean = true;
    public months: any = [
      'January', 
      'February', 
      'March', 
      'April', 
      'May', 
      'June', 
      'July', 
      'August', 
      'September', 
      'October', 
      'November', 
      'December'
    ]
    public labels: any = {
      initial: 'Initial Expense',
      actual: 'Actual Expense', 
      expected: 'Expected Expense'
    }

    @HostListener('window:resize', ['$event'])
    public onResize(event?: any): void {
      if(window.innerWidth <= 820){
        this.viewport = false;
      } else {
        this.viewport = true;
      }

      this.getCurrentDate();
    }
  

    public getCurrentDate(): void {
      setInterval(() => {
        let time = new Date();   

        if(time.getHours() > 12) {
          this.status = 'PM';
          this.hour = time.getHours() - 12;
        } else {
          this.status = 'AM';
        this.hour = time.getHours();
        }
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
      }, 1000); 

      this.ChartData();
    }

    public ChartData(): void {
      this.basicData = {
        labels: this.months,
        datasets: [
            {
                label: this.labels.initial,
                data: null,
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
            },
            {
                label: this.labels.expected,
                data: null,
                fill: false,
                borderColor: '#FFA726',
                tension: .4
            },
            {
              label: this.labels.actual,
              data: null,
              fill: false,
              borderColor: '#F00F0F',
              tension: .4
          }
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

  this.routeLists();
}

public routeLists(): void {
  this.monthly = (this.route.snapshot.paramMap.get('data') === 'true');
}

    ngOnInit(): void {
      this.onResize()
    }
}
