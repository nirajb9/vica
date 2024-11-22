import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinepolicyListComponent } from './offlinepolicy-list.component';

describe('OfflinepolicyListComponent', () => {
  let component: OfflinepolicyListComponent;
  let fixture: ComponentFixture<OfflinepolicyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflinepolicyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflinepolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
