import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcompanyAddComponent } from './vcompany-add.component';

describe('VcompanyAddComponent', () => {
  let component: VcompanyAddComponent;
  let fixture: ComponentFixture<VcompanyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcompanyAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcompanyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
