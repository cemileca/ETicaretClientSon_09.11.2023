import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldAdminProductsComponent } from './form-field-admin-products.component';

describe('FormFieldAdminProductsComponent', () => {
  let component: FormFieldAdminProductsComponent;
  let fixture: ComponentFixture<FormFieldAdminProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldAdminProductsComponent]
    });
    fixture = TestBed.createComponent(FormFieldAdminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
