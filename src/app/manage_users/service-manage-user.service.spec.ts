import { TestBed } from '@angular/core/testing';

import { ServiceManageUserService } from './service-manage-user.service';

describe('ServiceManageUserService', () => {
  let service: ServiceManageUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceManageUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
