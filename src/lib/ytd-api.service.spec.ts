import { TestBed, inject } from '@angular/core/testing';

import { NgxYtdApiService } from './ytd-api.service';

describe('YtdApiService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [NgxYtdApiService]
		});
	});

	it('should be created', inject([NgxYtdApiService], (service: NgxYtdApiService) => {
		expect(service).toBeTruthy();
	}));
});
