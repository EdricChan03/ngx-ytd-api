import { TestBed, async } from '@angular/core/testing';
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
  it('#list should return a result', async(() => {
    service.list({ key: API_KEY }).subscribe(result => {
      expect(result).not.toBeNull();
    });
  }));
});
