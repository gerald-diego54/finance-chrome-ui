import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLabelComponent } from './settings-label.component';

describe('SettingsLabelComponent', () => {
  let component: SettingsLabelComponent;
  let fixture: ComponentFixture<SettingsLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
