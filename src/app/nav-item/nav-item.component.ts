import { Component, Input, signal } from '@angular/core';

export type RouterLinkCommands = any[] | string | null | undefined;

@Component({
  selector: 'app-nav-item',
  styleUrls: ['./nav-item.component.less'],
  template: `<a [routerLink]="routerLinkSignal()">
    <ng-content></ng-content>
  </a> `,
})
export class NavItemComponent {
  routerLinkSignal = signal<RouterLinkCommands>(null);
  @Input() set routerLink(commands: RouterLinkCommands) {
    this.routerLinkSignal.set(commands);
  }
}
