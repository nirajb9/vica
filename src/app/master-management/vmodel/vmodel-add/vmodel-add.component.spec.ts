import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmodelAddComponent } from './vmodel-add.component';

describe('VmodelAddComponent', () => {
  let component: VmodelAddComponent;
  let fixture: ComponentFixture<VmodelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmodelAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmodelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
