import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  
  public viewport: boolean = true;



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
