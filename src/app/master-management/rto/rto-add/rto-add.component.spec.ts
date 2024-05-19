import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtoAddComponent } from './rto-add.component';

describe('RtoAddComponent', () => {
  let component: RtoAddComponent;
  let fixture: ComponentFixture<RtoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtoAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
