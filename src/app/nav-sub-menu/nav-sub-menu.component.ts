import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList,
  signal,
} from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { Subscription, filter, from, mergeMap } from 'rxjs';

@Component({
  selector: 'app-nav-sub-menu',
  templateUrl: './nav-sub-menu.component.html',
  styleUrls: ['./nav-sub-menu.component.less'],
})
export class NavSubMenuComponent implements AfterViewInit, OnDestroy {
  open = signal<boolean>(false);

  headerTextSignal = signal<string>('');
  @Input() set headerText(value: string) {
    this.headerTextSignal.set(value);
  }

  @ContentChildren(NavItemComponent)
  navItemContentChildren?: QueryList<NavItemComponent>;

  toDestroy = new Subscription();

  ngAfterViewInit(): void {
    const navListItems = this.navItemContentChildren?.toArray();

    if (navListItems) {
      this.toDestroy.add(
        from(navListItems)
          .pipe(
            mergeMap((item) => item.activeChange),
            filter((isActive) => isActive)
          )
          .subscribe(() => {
            setTimeout(() => this.open.set(true));
          })
      );
    }
  }

  ngOnDestroy(): void {
    this.toDestroy.unsubscribe();
  }
}
