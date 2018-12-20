import { TestBed, async, inject } from '@angular/core/testing';
import { NgxYtdApiCommentsService } from './ytd-api-comments.service';
import { HttpClientModule } from '@angular/common/http';

const API_KEY = 'AIzaSyBcgBbQaYNjtyunJP3Mo8IDgnzWnhiIKvo';
describe('NgxYtdApiCommentsService', () => {
  let service: NgxYtdApiCommentsService;
  beforeEach(() => {
    // Configure the module for testing
    TestBed.configureTestingModule({
      providers: [NgxYtdApiCommentsService],
      imports: [HttpClientModule]
    });
    // Retrieve the service created from the module
    service = TestBed.get(NgxYtdApiCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('NgxYtdApiCommentsService#list', () => {
    it('should return an error when called without an ID and an API key', async(() => {
      // TODO(Edric): Find out a conservative way to reduce quota costs for API testing
      service.list({ key: API_KEY, part: 'id' }).subscribe((result) => {
        expect(result).toBeNull();
      }, error => {
        expect(error).not.toBeNull();
      });
    }));
    it('should return a result when called with an ID and an API key', async(() => {
      // TODO(Edric): Find out a conservative way to reduce quota costs for API testing
      service.list({ key: API_KEY, part: 'id', id: 'Ugz0HaaYfwwwfLbyKLN4AaABAg' }).subscribe((result) => {
        expect(result).not.toBeNull();
      });
    }));
  });
});
