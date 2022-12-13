import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTempTemplateDrivenComponent } from './edit-temp-template-driven.component';

describe('EditTempTemplateDrivenComponent', () => {
  let component: EditTempTemplateDrivenComponent;
  let fixture: ComponentFixture<EditTempTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTempTemplateDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTempTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
