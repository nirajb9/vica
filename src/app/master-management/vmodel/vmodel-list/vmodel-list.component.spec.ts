import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmodelListComponent } from './vmodel-list.component';

describe('VmodelListComponent', () => {
  let component: VmodelListComponent;
  let fixture: ComponentFixture<VmodelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmodelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmodelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
