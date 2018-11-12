import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoVideosGetRatingComponent } from './demo-videos-get-rating.component';

describe('DemoVideosGetRatingComponent', () => {
  let component: DemoVideosGetRatingComponent;
  let fixture: ComponentFixture<DemoVideosGetRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoVideosGetRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoVideosGetRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
