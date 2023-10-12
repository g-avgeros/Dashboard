import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalKwhComponent } from './total-kwh.component';

describe('TotalKwhComponent', () => {
  let component: TotalKwhComponent;
  let fixture: ComponentFixture<TotalKwhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalKwhComponent]
    });
    fixture = TestBed.createComponent(TotalKwhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
