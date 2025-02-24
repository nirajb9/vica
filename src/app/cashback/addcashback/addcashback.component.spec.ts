import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcashbackComponent } from './addcashback.component';

describe('AddcashbackComponent', () => {
  let component: AddcashbackComponent;
  let fixture: ComponentFixture<AddcashbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcashbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcashbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
