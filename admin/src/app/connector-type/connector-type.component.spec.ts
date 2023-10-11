import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectorTypeComponent } from './connector-type.component';

describe('ConnectorTypeComponent', () => {
  let component: ConnectorTypeComponent;
  let fixture: ComponentFixture<ConnectorTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectorTypeComponent]
    });
    fixture = TestBed.createComponent(ConnectorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
