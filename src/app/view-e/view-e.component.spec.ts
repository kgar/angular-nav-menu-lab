import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEComponent } from './view-e.component';

describe('ViewEComponent', () => {
  let component: ViewEComponent;
  let fixture: ComponentFixture<ViewEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEComponent]
    });
    fixture = TestBed.createComponent(ViewEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
