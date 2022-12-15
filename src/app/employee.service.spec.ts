import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should set the active user correctly', () => {
    // Arrange
    // Assert
    expect(service.getAllEmployees().length == 7);
    expect(service.getEmployee(1).name).toEqual('Avnish');
  });
});
