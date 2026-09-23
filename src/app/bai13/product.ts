import { Service } from '@angular/core';

@Service()
export class ProductService {
  productsImage = [
    { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "bai13/h1.png" },
    { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "bai13/h2.png" },
    { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "bai13/h3.png" },
  ]

  getProductsWithImages() {
    return this.productsImage
  }

  getProductDetail(id: any) {
    return this.productsImage.find(x => x.ProductId == id)
  }
}