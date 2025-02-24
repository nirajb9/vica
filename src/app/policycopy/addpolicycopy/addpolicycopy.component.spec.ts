import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpolicycopyComponent } from './addpolicycopy.component';

describe('AddpolicycopyComponent', () => {
  let component: AddpolicycopyComponent;
  let fixture: ComponentFixture<AddpolicycopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpolicycopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpolicycopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
