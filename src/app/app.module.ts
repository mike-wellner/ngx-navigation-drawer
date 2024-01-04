import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationDrawerModule } from 'projects/ngx-navigation-drawer/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
