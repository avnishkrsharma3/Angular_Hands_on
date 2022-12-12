import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { QuantityIncrementComponent } from './quantity-increment.component';


describe('QuantityIncrementComponent', () => {
  let component: QuantityIncrementComponent;
  let fixture: ComponentFixture<QuantityIncrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityIncrementComponent],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantityIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Task 1
  it('check, Is click button is working?', () => {
    fixture = TestBed.createComponent(QuantityIncrementComponent);
    let comp = fixture.debugElement;
    let clickButton = comp.nativeElement.querySelector('#clickMe');
    clickButton.click();
    fixture.detectChanges();
    expect(comp.nativeElement.querySelector('#simpleClick').textContent).toBe('Click me button clicked!')
  })
  //Task 2
  it('check, Is click button is working for add button?', () => {
    fixture = TestBed.createComponent(QuantityIncrementComponent);
    let comp = fixture.debugElement;
    let clickButton = comp.nativeElement.querySelector('#clickMeTotal');
    clickButton.click();
    fixture.detectChanges();
    let valIntial = comp.nativeElement.querySelector('#total').value + 1;
    expect(valIntial).toBe("1");
  })
});
