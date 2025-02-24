import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddendorsementComponent } from './addendorsement.component';

describe('AddendorsementComponent', () => {
  let component: AddendorsementComponent;
  let fixture: ComponentFixture<AddendorsementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddendorsementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddendorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
