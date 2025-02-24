import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpolicycopyComponent } from './editpolicycopy.component';

describe('EditpolicycopyComponent', () => {
  let component: EditpolicycopyComponent;
  let fixture: ComponentFixture<EditpolicycopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpolicycopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpolicycopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
