import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtVideoPickerComponent } from './yt-video-picker.component';

describe('YtVideoPickerComponent', () => {
  let component: YtVideoPickerComponent;
  let fixture: ComponentFixture<YtVideoPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtVideoPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtVideoPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
