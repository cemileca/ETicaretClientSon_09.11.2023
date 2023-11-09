import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUiComponent } from './navbar-ui.component';

describe('NavbarUiComponent', () => {
  let component: NavbarUiComponent;
  let fixture: ComponentFixture<NavbarUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarUiComponent]
    });
    fixture = TestBed.createComponent(NavbarUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
