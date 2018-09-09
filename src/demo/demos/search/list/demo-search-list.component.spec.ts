import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSearchListComponent } from './demo-search-list.component';

describe('DemoSearchListComponent', () => {
  let component: DemoSearchListComponent;
  let fixture: ComponentFixture<DemoSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoSearchListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
