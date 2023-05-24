import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDComponent } from './view-d.component';

describe('ViewDComponent', () => {
  let component: ViewDComponent;
  let fixture: ComponentFixture<ViewDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDComponent]
    });
    fixture = TestBed.createComponent(ViewDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
