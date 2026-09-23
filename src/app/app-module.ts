import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { ServiceProductImageEvent } from './bai13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './bai13/service-product-image-event-detail/service-product-image-event-detail';

@NgModule({
  declarations: [App, Home, ServiceProductImageEvent, ServiceProductImageEventDetail],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
