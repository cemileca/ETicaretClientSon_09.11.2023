import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAdminProductsComponent } from './sidebar-admin-products.component';

describe('SidebarAdminProductsComponent', () => {
  let component: SidebarAdminProductsComponent;
  let fixture: ComponentFixture<SidebarAdminProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarAdminProductsComponent]
    });
    fixture = TestBed.createComponent(SidebarAdminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
