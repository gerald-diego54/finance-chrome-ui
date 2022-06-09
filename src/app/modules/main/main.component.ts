import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  constructor(
    private route: Router
  ) { }

  public screen_height: string = '';

  @HostListener('window:resize', ['$event'])
  public onResize(event?: undefined) {
    let url = './../../../assets/finance-main-background.png'
    this.screen_height = `
    height: ${window.innerHeight - 200}px;
    background-image: url('${url}');  
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 100px 0 0 0;
    `
  }

  public login(): void {
    this.route.navigate(['main/security/login']);
  }

  public register(): void {
    this.route.navigate(['main/security/register']);
  }

  ngOnInit(): void {
    this.onResize()
  }

}
