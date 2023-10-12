import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalLocationsComponent } from './total-locations.component';

describe('TotalLocationsComponent', () => {
  let component: TotalLocationsComponent;
  let fixture: ComponentFixture<TotalLocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalLocationsComponent]
    });
    fixture = TestBed.createComponent(TotalLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
