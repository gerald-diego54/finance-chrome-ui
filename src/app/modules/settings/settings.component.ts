import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  public viewport: boolean = true;
  public settings: boolean = true;
  public labels: boolean = true;

  public renderSetLabels(): void {
    this.settings = false;
  }

  public dataFromChildSettingsLabel(data: any): void {
    console.log(data);
    this.settings = data
  }


  ngOnInit(): void {
  }

}
