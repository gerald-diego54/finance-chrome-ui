import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  public viewport: boolean = true;


  public imageRoute(): void {
    this.route.navigate(['/main']);
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event?: any): void {
    if(window.innerWidth <= 820){
      this.viewport = false;
    } else {
      this.viewport = true;
    }
  }

  ngOnInit(): void {
    this.onResize();
  }

}
