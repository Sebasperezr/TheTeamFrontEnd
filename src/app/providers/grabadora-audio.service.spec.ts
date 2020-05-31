import { TestBed } from '@angular/core/testing';

import { GrabadoraAudioService } from './grabadora-audio.service';

describe('GrabadoraAudioService', () => {
  let service: GrabadoraAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrabadoraAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
