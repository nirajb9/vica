import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TppolicyListComponent } from './tppolicy-list.component';

describe('TppolicyListComponent', () => {
  let component: TppolicyListComponent;
  let fixture: ComponentFixture<TppolicyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TppolicyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TppolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
