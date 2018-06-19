import { TestBed, inject, async, fakeAsync } from '@angular/core/testing';
import { NgxYtdApiService } from './ytd-api.service';
import { HttpClientModule } from '@angular/common/http';

// TODO(Edric): Make this private
const API_KEY = 'AIzaSyBmfHhVrxcau7hOicv9ksQ6uW2PQMLzv10';
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
	it('#search should return a result', async(() => {
		service.search('let\'s play', { key: API_KEY }).subscribe(result => {
			expect(result).not.toBeNull();
		});
	}));
});
