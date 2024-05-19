import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcompanyEditComponent } from './vcompany-edit.component';

describe('VcompanyEditComponent', () => {
  let component: VcompanyEditComponent;
  let fixture: ComponentFixture<VcompanyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcompanyEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcompanyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
