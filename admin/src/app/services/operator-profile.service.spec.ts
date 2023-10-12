import { TestBed } from '@angular/core/testing';

import { OperatorProfileService } from './operator-profile.service';

describe('OperatorProfileService', () => {
  let service: OperatorProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatorProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
