import { TestBed } from '@angular/core/testing';

import { AvatarAngularKapibaraService } from './avatar-angular-kapibara.service';

describe('AvatarAngularKapibaraService', () => {
  let service: AvatarAngularKapibaraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarAngularKapibaraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
