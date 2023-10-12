import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSessionsComponent } from './total-sessions.component';

describe('TotalSessionsComponent', () => {
  let component: TotalSessionsComponent;
  let fixture: ComponentFixture<TotalSessionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalSessionsComponent]
    });
    fixture = TestBed.createComponent(TotalSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
