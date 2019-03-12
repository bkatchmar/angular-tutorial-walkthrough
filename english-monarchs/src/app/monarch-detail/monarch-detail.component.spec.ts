import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonarchDetailComponent } from './monarch-detail.component';

describe('MonarchDetailComponent', () => {
  let component: MonarchDetailComponent;
  let fixture: ComponentFixture<MonarchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonarchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonarchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
