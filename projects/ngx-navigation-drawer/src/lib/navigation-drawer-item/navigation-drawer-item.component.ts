import { ChangeDetectionStrategy, Component, Input } from '@angular/core';



/**
 *
 */
@Component({
  selector: 'ngx-navigation-drawer-item',
  templateUrl: './navigation-drawer-item.component.html',
  styleUrls: ['./navigation-drawer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class NavigationDrawerItemComponent {

  @Input() icon = '';
  @Input() description = '';
  @Input() folded = true;
  @Input() selected = false;

  constructor() {}
}
