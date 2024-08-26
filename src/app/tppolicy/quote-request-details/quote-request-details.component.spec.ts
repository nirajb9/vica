import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteRequestDetailsComponent } from './quote-request-details.component';

describe('QuoteRequestDetailsComponent', () => {
  let component: QuoteRequestDetailsComponent;
  let fixture: ComponentFixture<QuoteRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteRequestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
