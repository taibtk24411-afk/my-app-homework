import { Component } from '@angular/core';
import { CatalogService } from '../catalog';

@Component({
  selector: 'app-catalog-list',
  standalone: false,
  styleUrl: './catalog-list.css',
  templateUrl: './catalog-list.html',
})
export class CatalogList {
  public categories: any

  constructor(private catalogService: CatalogService) {
    this.categories = this.catalogService.getCategories()
  }
}