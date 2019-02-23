import { TestBed } from '@angular/core/testing';
import { NgxYtdApiCommonService } from './ytd-api-common.service';
import { NgxYtdApiCommonModule } from './ytd-api-common.module';
import { NGX_YTD_API_DEFAULT_STANDARD_OPTIONS } from './ytd-api-common.injectors';
import { NgxYtdApiSearchListOpts } from 'ngx-ytd-api/search';

const API_KEY = 'AIzaSyBcgBbQaYNjtyunJP3Mo8IDgnzWnhiIKvo';
describe('NgxYtdApiCommonService', () => {
  let service: NgxYtdApiCommonService;
  beforeEach(() => {
    // Configure the module for testing
    TestBed.configureTestingModule({
      imports: [NgxYtdApiCommonModule],
      providers: [{
        provide: NGX_YTD_API_DEFAULT_STANDARD_OPTIONS,
        useValue: {
          key: API_KEY
        }
      }]
    });
    // Retrieve the service created from the module
    service = TestBed.get(NgxYtdApiCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('NgxYtdApiCommonService#mergeParamsWithStandardParams', () => {
    it('should merge a query and the API key together', () => {
      const mergedOpts = service.mergeParamsWithStandardParams<NgxYtdApiSearchListOpts>({ q: 'meme review' });
      expect(mergedOpts['key']).not.toBeNull();
      expect(mergedOpts['q']).not.toBeNull();
    });
    it('should not overwrite the value specified with the default value', () => {
      const mergedOpts = service.mergeParamsWithStandardParams({ key: 'test' });
      expect(mergedOpts['key']).not.toBe('test');
      expect(mergedOpts['key']).toBe(API_KEY);
    });
  });
});
