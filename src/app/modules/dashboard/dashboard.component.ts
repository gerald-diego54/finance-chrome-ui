import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {

  constructor() { }

    public hour: any;
    public minutes: any;
    public seconds: any;
    public status: any;

  getCurrentDate() {
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
    }, 1000); // set it every one seconds}
  }

    ngOnInit(): void {
      this.getCurrentDate()
      // console.log(this.time)
    }

  }
