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

  public login(): void {
    this.route.navigate(['main/security/login']);
  }

  public register(): void {
    this.route.navigate(['main/security/register']);
  }

  ngOnInit(): void {
  }

}
