import { TestBed, inject, async, fakeAsync } from '@angular/core/testing';
import { NgxYtdApiService } from './ytd-api.service';
import { HttpClientModule } from '@angular/common/http';

// TODO(Edric): Make this private
const API_KEY = 'AIzaSyBfSbMRADGI3zILVFbej0zb2v9_020SHlY';
describe('NgxYtdApiService', () => {
	let service: NgxYtdApiService;
	beforeEach(() => {
		// Configure the module for testing
		TestBed.configureTestingModule({
			providers: [NgxYtdApiService],
			imports: [HttpClientModule]
		});
		// Retrieve the service created from the module
		service = TestBed.get(NgxYtdApiService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
	it('#searchVideos should return a result', async(() => {
		service.searchVideos('minecraft', { apiKey: API_KEY }).subscribe(result => {
			expect(result).not.toBeNull();
		});
	}));
	it('#search should return a result', async(() => {
		service.search('let\'s play', { apiKey: API_KEY }).subscribe(result => {
			expect(result).not.toBeNull();
		});
	}));
});
