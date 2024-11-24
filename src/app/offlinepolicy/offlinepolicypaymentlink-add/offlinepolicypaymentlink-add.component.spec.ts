import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinepolicypaymentlinkAddComponent } from './offlinepolicypaymentlink-add.component';

describe('OfflinepolicypaymentlinkAddComponent', () => {
  let component: OfflinepolicypaymentlinkAddComponent;
  let fixture: ComponentFixture<OfflinepolicypaymentlinkAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflinepolicypaymentlinkAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflinepolicypaymentlinkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
