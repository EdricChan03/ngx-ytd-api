import { TestBed, async } from '@angular/core/testing';
import { NgxYtdApiSearchService } from './ytd-api-search.service';
import { HttpClientModule } from '@angular/common/http';

// TODO(Edric): Make this private
const API_KEY = 'AIzaSyBmfHhVrxcau7hOicv9ksQ6uW2PQMLzv10';
describe('NgxYtdApiSearchService', () => {
  let service: NgxYtdApiSearchService;
  beforeEach(() => {
    // Configure the module for testing
    TestBed.configureTestingModule({
      providers: [NgxYtdApiSearchService],
      imports: [HttpClientModule]
    });
    // Retrieve the service created from the module
    service = TestBed.get(NgxYtdApiSearchService);
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
