import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpComponent } from './view-emp.component';
import { EmployeeComponent } from '../employee/employee.component';

describe('ViewEmpComponent', () => {
  let component: ViewEmpComponent;
  let fixture: ComponentFixture<ViewEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmpComponent, EmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create', () => {
    expect(EmployeeComponent).toBeTruthy();
  });

});
