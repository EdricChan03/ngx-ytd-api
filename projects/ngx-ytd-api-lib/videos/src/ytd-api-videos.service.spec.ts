import { TestBed, async } from '@angular/core/testing';
import { NgxYtdApiVideosService } from './ytd-api-videos.service';
import { NgxYtdApiVideosModule } from './ytd-api-videos.module';

const API_KEY = 'AIzaSyBcgBbQaYNjtyunJP3Mo8IDgnzWnhiIKvo';
describe('NgxYtdApiVideosService', () => {
  let service: NgxYtdApiVideosService;
  beforeEach(() => {
    // Configure the module for testing
    TestBed.configureTestingModule({
      imports: [NgxYtdApiVideosModule]
    });
    // Retrieve the service created from the module
    service = TestBed.get(NgxYtdApiVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('NgxYtdApiVideosService#getRating', () => {
    it('should return an error when no access token is specified', async(() => {
      service.getRating({ key: API_KEY, id: 'dQw4w9WgXcQ', part: 'id,player' }).subscribe(result => {
        expect(result).toBeNull();
      }, error => {
        expect(error).not.toBeNull();
      });
    }));
  });
  describe('NgxYtdApiVideosService#list', () => {
    it('should return a result when called with an API key and a video ID', async(() => {
      service.list({ key: API_KEY, id: 'dQw4w9WgXcQ', part: 'id,player' }).subscribe(result => {
        expect(result).not.toBeNull();
      });
    }));
  });
});
