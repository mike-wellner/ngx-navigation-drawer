import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { NavigationDrawerItemComponent } from './navigation-drawer-item/navigation-drawer-item.component';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';

export const otherOptions: MatTooltipDefaultOptions = {
  showDelay: 0,
  hideDelay: 0,
  touchendHideDelay: 0,
  disableTooltipInteractivity: true
};


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
  ],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: otherOptions }
  ],
})

export class NavigationDrawerModule { }
