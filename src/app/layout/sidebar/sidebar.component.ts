import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  public display: any;
  public items!: MenuItem[];

  public labels(): void {
    this.items = [
      { label: 'Account 1', routerLink: '/main/dashboard' },
      { label: 'Account 2', routerLink: '/main/dashboard' }
    ]
  }

  ngOnInit(): void {
    this.labels();
  }

}
