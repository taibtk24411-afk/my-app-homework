import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ServiceProductImageEvent } from './bai13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './bai13/service-product-image-event-detail/service-product-image-event-detail';
import { CatalogList } from './bai14/catalog-list/catalog-list';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'service-product-image-event', component: ServiceProductImageEvent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetail },
  { path: 'catalog-list', component: CatalogList },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
