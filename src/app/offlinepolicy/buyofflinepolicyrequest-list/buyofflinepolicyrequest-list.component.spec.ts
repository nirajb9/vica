import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyofflinepolicyrequestListComponent } from './buyofflinepolicyrequest-list.component';

describe('BuyofflinepolicyrequestListComponent', () => {
  let component: BuyofflinepolicyrequestListComponent;
  let fixture: ComponentFixture<BuyofflinepolicyrequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyofflinepolicyrequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyofflinepolicyrequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
