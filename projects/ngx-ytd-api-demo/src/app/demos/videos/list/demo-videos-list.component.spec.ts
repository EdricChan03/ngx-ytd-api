import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoVideosListComponent } from './demo-videos-list.component';

describe('DemoVideosListComponent', () => {
  let component: DemoVideosListComponent;
  let fixture: ComponentFixture<DemoVideosListComponent>;

  beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ DemoVideosListComponent ]
  })
  .compileComponents();
  }));

  beforeEach(() => {
  fixture = TestBed.createComponent(DemoVideosListComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  });

  it('should create', () => {
  expect(component).toBeTruthy();
  });
});
