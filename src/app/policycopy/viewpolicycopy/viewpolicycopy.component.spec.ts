import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpolicycopyComponent } from './viewpolicycopy.component';

describe('ViewpolicycopyComponent', () => {
  let component: ViewpolicycopyComponent;
  let fixture: ComponentFixture<ViewpolicycopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpolicycopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpolicycopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
