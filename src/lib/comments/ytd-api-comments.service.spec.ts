import { TestBed, async, inject } from '@angular/core/testing';
import { NgxYtdApiCommentService } from './ytd-api-comments.service';
import { HttpClientModule } from '@angular/common/http';

// TODO(Edric): Make this private
const API_KEY = 'AIzaSyBmfHhVrxcau7hOicv9ksQ6uW2PQMLzv10';
describe('NgxYtdApiCommentService', () => {
  let service: NgxYtdApiCommentService;
  beforeEach(() => {
    // Configure the module for testing
    TestBed.configureTestingModule({
      providers: [NgxYtdApiCommentService],
      imports: [HttpClientModule]
    });
    // Retrieve the service created from the module
    service = TestBed.get(NgxYtdApiCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('NgxYtdApiCommentService#list', () => {
    it('should return an error when called without an ID and an API key', async(() => {
      service.list({ key: API_KEY }).subscribe((result) => {
        expect(result).toBeNull();
      }, error => {
        expect(error).not.toBeNull();
      });
    }));
    it('should return a result when called with an ID and an API key', async(() => {
      service.list({ key: API_KEY, id: 'Ugz0HaaYfwwwfLbyKLN4AaABAg' }).subscribe((result) => {
        expect(result).not.toBeNull();
      });
    }));
  });
});
