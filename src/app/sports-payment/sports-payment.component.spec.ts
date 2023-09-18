import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsPaymentComponent } from './sports-payment.component';

describe('SportsPaymentComponent', () => {
  let component: SportsPaymentComponent;
  let fixture: ComponentFixture<SportsPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsPaymentComponent]
    });
    fixture = TestBed.createComponent(SportsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
