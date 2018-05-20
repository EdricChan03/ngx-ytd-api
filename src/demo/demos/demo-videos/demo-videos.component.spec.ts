import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoVideosComponent } from './demo-videos.component';

describe('DemoVideosComponent', () => {
  let component: DemoVideosComponent;
  let fixture: ComponentFixture<DemoVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
