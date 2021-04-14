import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-drawer-item',
  templateUrl: './navigation-drawer-item.component.html',
  styleUrls: ['./navigation-drawer-item.component.scss']
})
export class NavigationDrawerItemComponent implements OnInit {

  @Input() icon = 'error';
  @Input() description = 'description_empty';
  @Input() folded = true;
  @Input() selected = false;

  constructor() {}

  ngOnInit(): void {
  }

}
