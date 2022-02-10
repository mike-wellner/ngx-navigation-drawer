import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-drawer-item',
  templateUrl: './navigation-drawer-item.component.html',
  styleUrls: ['./navigation-drawer-item.component.scss']
})
export class NavigationDrawerItemComponent {

  @Input() icon = '';
  @Input() description = '';
  @Input() folded = true;
  @Input() selected = false;

  constructor() {}
}
