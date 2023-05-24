import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-nav-sub-menu',
  templateUrl: './nav-sub-menu.component.html',
  styleUrls: ['./nav-sub-menu.component.less']
})
export class NavSubMenuComponent {
  open = signal<boolean>(false);
  headerTextSignal = signal<string>('');
  @Input() set headerText(value: string) {
    this.headerTextSignal.set(value);
  }
}
