import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { page02GuardGuard } from './page02-guard-guard';

describe('page02GuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => page02GuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
