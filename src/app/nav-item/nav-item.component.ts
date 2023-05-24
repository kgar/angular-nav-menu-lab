import { Component, EventEmitter, Input, signal } from '@angular/core';

export type RouterLinkCommands = any[] | string | null | undefined;

@Component({
  selector: 'app-nav-item',
  styleUrls: ['./nav-item.component.less'],
  template: `
    <a
      [routerLink]="routerLinkSignal()"
      routerLinkActive="active"
      (isActiveChange)="activeChange.emit($event)"
    >
      <ng-content></ng-content>
    </a>
  `,
})
export class NavItemComponent {
  routerLinkSignal = signal<RouterLinkCommands>(null);
  isActive = signal<boolean>(false);
  activeChange = new EventEmitter<boolean>();
  @Input() set routerLink(commands: RouterLinkCommands) {
    this.routerLinkSignal.set(commands);
  }
}
