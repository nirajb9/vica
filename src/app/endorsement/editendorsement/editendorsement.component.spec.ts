import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditendorsementComponent } from './editendorsement.component';

describe('EditendorsementComponent', () => {
  let component: EditendorsementComponent;
  let fixture: ComponentFixture<EditendorsementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditendorsementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditendorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
