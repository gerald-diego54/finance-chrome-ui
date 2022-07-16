import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecordExpenseComponent } from './new-record-expense.component';

describe('NewRecordExpenseComponent', () => {
  let component: NewRecordExpenseComponent;
  let fixture: ComponentFixture<NewRecordExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRecordExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecordExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
