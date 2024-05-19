import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcompanyListComponent } from './vcompany-list.component';

describe('VcompanyListComponent', () => {
  let component: VcompanyListComponent;
  let fixture: ComponentFixture<VcompanyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcompanyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
