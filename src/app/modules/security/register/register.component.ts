import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  
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
      padding: 30px 0 0 0;
    `;
  }

  ngOnInit(): void {
    this.screenSetting();
  }

}
