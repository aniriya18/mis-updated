import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhcComponent } from './mhc.component';

describe('MhcComponent', () => {
  let component: MhcComponent;
  let fixture: ComponentFixture<MhcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
