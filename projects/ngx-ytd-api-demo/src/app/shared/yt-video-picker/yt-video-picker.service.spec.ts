import { TestBed } from '@angular/core/testing';

import { YtVideoPickerService } from './yt-video-picker.service';

describe('YtVideoPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YtVideoPickerService = TestBed.get(YtVideoPickerService);
    expect(service).toBeTruthy();
  });
});
