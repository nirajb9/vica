import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TppolicyAddComponent } from './tppolicy-add.component';

describe('TppolicyAddComponent', () => {
  let component: TppolicyAddComponent;
  let fixture: ComponentFixture<TppolicyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TppolicyAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TppolicyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
