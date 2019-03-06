import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonarchsComponent } from './monarchs.component';

describe('MonarchsComponent', () => {
  let component: MonarchsComponent;
  let fixture: ComponentFixture<MonarchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonarchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonarchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
