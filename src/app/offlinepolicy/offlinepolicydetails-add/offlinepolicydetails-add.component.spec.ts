import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinepolicydetailsAddComponent } from './offlinepolicydetails-add.component';

describe('OfflinepolicydetailsAddComponent', () => {
  let component: OfflinepolicydetailsAddComponent;
  let fixture: ComponentFixture<OfflinepolicydetailsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflinepolicydetailsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflinepolicydetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
