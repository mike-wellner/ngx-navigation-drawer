import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NavigationDrawerItemComponent } from './navigation-drawer-item/navigation-drawer-item.component';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [
    NavigationDrawerItemComponent,
    NavigationDrawerComponent
  ],
  exports: [
    NavigationDrawerItemComponent,
    NavigationDrawerComponent
  ]
})

export class NavigationDrawerModule {}
