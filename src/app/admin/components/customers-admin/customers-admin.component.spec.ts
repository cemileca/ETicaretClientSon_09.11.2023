import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAdminComponent } from './customers-admin.component';

describe('CustomersAdminComponent', () => {
  let component: CustomersAdminComponent;
  let fixture: ComponentFixture<CustomersAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersAdminComponent]
    });
    fixture = TestBed.createComponent(CustomersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
