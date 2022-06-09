import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  public screen_height_2: string = '';

  public screenSetting(): void {
    let url = './../../../../assets/login-background.svg';
    this.screen_height_2 = `
      height: ${window.innerHeight - 95}px;
      background-image: url('${url}'); 
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      padding: 80px 0 0 0;
    `;
  }

  public imageRoute(): void {
    this.route.navigate(['/main']);
  }

  ngOnInit(): void {
    this.screenSetting();
  }

}
