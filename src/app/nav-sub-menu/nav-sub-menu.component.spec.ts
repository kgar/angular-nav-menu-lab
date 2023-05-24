import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSubMenuComponent } from './nav-sub-menu.component';

describe('NavSubMenuComponent', () => {
  let component: NavSubMenuComponent;
  let fixture: ComponentFixture<NavSubMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavSubMenuComponent]
    });
    fixture = TestBed.createComponent(NavSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
