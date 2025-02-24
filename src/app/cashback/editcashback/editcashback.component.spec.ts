import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcashbackComponent } from './editcashback.component';

describe('EditcashbackComponent', () => {
  let component: EditcashbackComponent;
  let fixture: ComponentFixture<EditcashbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcashbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcashbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
