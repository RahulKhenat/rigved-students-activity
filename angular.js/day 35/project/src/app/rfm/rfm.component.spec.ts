import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfmComponent } from './rfm.component';

describe('RfmComponent', () => {
  let component: RfmComponent;
  let fixture: ComponentFixture<RfmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
