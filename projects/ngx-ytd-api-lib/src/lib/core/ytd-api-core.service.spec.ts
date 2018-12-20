import { TestBed, async } from '@angular/core/testing';
import { NgxYtdApiCoreService } from './ytd-api-core.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxYtdApiSearchListResult, NgxYtdApiSearchListOpts } from 'ngx-ytd-api/search';

const API_KEY = 'AIzaSyBcgBbQaYNjtyunJP3Mo8IDgnzWnhiIKvo';
describe('NgxYtdApiCoreService', () => {
  let service: NgxYtdApiCoreService;
  beforeEach(() => {
    // Configure the module for testing
    TestBed.configureTestingModule({
      providers: [NgxYtdApiCoreService],
      imports: [HttpClientModule]
    });
    // Retrieve the service created from the module
    service = TestBed.get(NgxYtdApiCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('NgxYtdApiCoreService#createHttpGet', () => {
    it('should return a search request', async(() => {
      const request = service.createHttpGet<NgxYtdApiSearchListResult, NgxYtdApiSearchListOpts>(
        service.ngxYtdSearchApiUrl,
        {
          q: 'meme review',
          key: API_KEY,
          part: 'snippet,id'
        }
      );
      request.subscribe(result => {
        expect(result).not.toBeNull();
      });
    }));
  });
});
