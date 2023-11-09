import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdminProductsComponent } from './table-admin-products.component';

describe('TableAdminProductsComponent', () => {
  let component: TableAdminProductsComponent;
  let fixture: ComponentFixture<TableAdminProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableAdminProductsComponent]
    });
    fixture = TestBed.createComponent(TableAdminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
