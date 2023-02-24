import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { MobileNavigationComponent } from './components/mobile-navigation/mobile-navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from './shared/shared.module';
import {ExampleModule} from "../example/example.module";

@NgModule({
  declarations: [AppComponent, SideNavigationComponent, MobileNavigationComponent, HeaderComponent, AboutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      closeButton: true,
      disableTimeOut: false,
      progressBar: true,
      toastClass: 'toast',
      positionClass: 'toast-bottom-right',
      enableHtml: true,
    }),
    AppRoutingModule,
    ExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}