import { TestBed, async } from '@angular/core/testing';
import { NgxYtdApiSearchService } from './ytd-api-search.service';
import { NgxYtdApiSearchModule } from './ytd-api-search.module';
import { NGX_YTD_API_DEFAULT_STANDARD_OPTIONS } from 'ngx-ytd-api/common';

const API_KEY = 'AIzaSyBcgBbQaYNjtyunJP3Mo8IDgnzWnhiIKvo';
describe('NgxYtdApiSearchService', () => {
  let service: NgxYtdApiSearchService;
  beforeEach(() => {
    // Configure the module for testing
    TestBed.configureTestingModule({
      imports: [NgxYtdApiSearchModule]
    });
    // Retrieve the service created from the module
    service = TestBed.get(NgxYtdApiSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('NgxYtdApiSearchService#list', () => {
    it('should return a result when called with an API key and a query', async(() => {
      service.list({ key: API_KEY, q: 'let\'s play', part: 'snippet' }).subscribe(result => {
        expect(result).not.toBeNull();
      });
    }));
  });
});

describe('NgxYtdApiSearchService w/ injection token', () => {
  let service: NgxYtdApiSearchService;
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [NgxYtdApiSearchModule],
        providers: [{
          provide: NGX_YTD_API_DEFAULT_STANDARD_OPTIONS,
          useValue: {
            key: API_KEY
          }
        }]
      });
    service = TestBed.get(NgxYtdApiSearchService);
  });
  it('should not return an error when API key is not specified explicitly', async(() => {
    service.list({ q: 'let\'s play', part: 'snippet' }).subscribe(result => {
      expect(result).not.toBeNull();
      // Check if the errors field is present
      // This field is not present if the request is valid
      expect(result['errors']).toBeUndefined();
    });
  }));
});
