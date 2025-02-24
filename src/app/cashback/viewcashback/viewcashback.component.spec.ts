import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcashbackComponent } from './viewcashback.component';

describe('ViewcashbackComponent', () => {
  let component: ViewcashbackComponent;
  let fixture: ComponentFixture<ViewcashbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcashbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcashbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
