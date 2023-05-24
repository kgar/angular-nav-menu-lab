import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewChildren,
  signal,
} from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-nav-sub-menu',
  templateUrl: './nav-sub-menu.component.html',
  styleUrls: ['./nav-sub-menu.component.less'],
})
export class NavSubMenuComponent implements AfterViewInit, AfterViewChecked {
  open = signal<boolean>(false);
  headerTextSignal = signal<string>('');
  @Input() set headerText(value: string) {
    this.headerTextSignal.set(value);
  }
  @ContentChildren(NavItemComponent)
  navItemContentChildren?: QueryList<NavItemComponent>;

  ngAfterViewInit(): void {
    // TODO: Is this unavoidable? Is there a better way to do this?
    setTimeout(() => {
      for (let directive of this.navItemContentChildren ?? []) {
        if (directive.isActive()) {
          this.open.set(true);
          break;
        }
      }
    });
  }

  ngAfterViewChecked(): void {}
}
