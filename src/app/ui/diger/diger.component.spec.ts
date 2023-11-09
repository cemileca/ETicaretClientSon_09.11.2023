import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigerComponent } from './diger.component';

describe('DigerComponent', () => {
  let component: DigerComponent;
  let fixture: ComponentFixture<DigerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigerComponent]
    });
    fixture = TestBed.createComponent(DigerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
