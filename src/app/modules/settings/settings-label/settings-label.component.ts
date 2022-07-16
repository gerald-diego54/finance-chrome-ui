import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings-label',
  templateUrl: './settings-label.component.html',
  styleUrls: ['./settings-label.component.sass']
})
export class SettingsLabelComponent implements OnInit {

  constructor() { }

  @Output() renderGeneralSettings = new EventEmitter();
  public renderSettings: boolean = true;

  public renderSettingsGeneral(): void {
    this.renderGeneralSettings.emit(this.renderSettings);
  }

  ngOnInit(): void {
    this.renderSettingsGeneral();
  }

}
