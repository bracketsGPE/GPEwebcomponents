import { TestBed } from '@angular/core/testing';

import { PortalModalService } from './portal-modal.service';

describe('PortalModalService', () => {
  let service: PortalModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
