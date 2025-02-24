import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewendorsementComponent } from './viewendorsement.component';

describe('ViewendorsementComponent', () => {
  let component: ViewendorsementComponent;
  let fixture: ComponentFixture<ViewendorsementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewendorsementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewendorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
