import { Component, Input, signal } from '@angular/core';

export type RouterLinkCommands = any[] | string | null | undefined;

@Component({
  selector: 'app-nav-item',
  styleUrls: ['./nav-item.component.less'],
  template: `
    <a
      [routerLink]="routerLinkSignal()"
      routerLinkActive="active"
      (isActiveChange)="isActive.set($event)"
    >
      <ng-content></ng-content>
    </a>
  `,
})
export class NavItemComponent {
  routerLinkSignal = signal<RouterLinkCommands>(null);
  isActive = signal<boolean>(false);
  @Input() set routerLink(commands: RouterLinkCommands) {
    this.routerLinkSignal.set(commands);
  }
}
