import { TestBed, async } from '@angular/core/testing';
import { NgxYtdApiSearchService } from './ytd-api-search.service';
import { HttpClientModule } from '@angular/common/http';

const API_KEY = 'AIzaSyBcgBbQaYNjtyunJP3Mo8IDgnzWnhiIKvo';
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
  describe('NgxYtdApiSearchService#list', () => {
    it('should return a result when called with an API key and a query', async(() => {
      service.list({ key: API_KEY, q: 'let\'s play' }).subscribe(result => {
        expect(result).not.toBeNull();
      });
    }));
  });
});
