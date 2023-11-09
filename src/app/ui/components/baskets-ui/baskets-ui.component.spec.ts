import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketsUiComponent } from './baskets-ui.component';

describe('BasketsUiComponent', () => {
  let component: BasketsUiComponent;
  let fixture: ComponentFixture<BasketsUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketsUiComponent]
    });
    fixture = TestBed.createComponent(BasketsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
