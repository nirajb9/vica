import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentlinkAddComponent } from './paymentlink-add.component';

describe('PaymentlinkAddComponent', () => {
  let component: PaymentlinkAddComponent;
  let fixture: ComponentFixture<PaymentlinkAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentlinkAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentlinkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
