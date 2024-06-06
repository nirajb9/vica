import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TppolicyEditComponent } from './tppolicy-edit.component';

describe('TppolicyEditComponent', () => {
  let component: TppolicyEditComponent;
  let fixture: ComponentFixture<TppolicyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TppolicyEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TppolicyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
