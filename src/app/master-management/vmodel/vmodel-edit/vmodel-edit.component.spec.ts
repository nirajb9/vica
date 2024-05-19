import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmodelEditComponent } from './vmodel-edit.component';

describe('VmodelEditComponent', () => {
  let component: VmodelEditComponent;
  let fixture: ComponentFixture<VmodelEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmodelEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmodelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
