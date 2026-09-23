import { Service } from '@angular/core';

@Service()
export class CatalogService {
  datas = [
    {
      "Cateid": "cate1", "CateName": "nuoc ngot",
      "Products": [
        { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "bai14/h1.png" },
        { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "bai14/h2.png" },
        { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "bai14/h3.png" },
      ]
    },
    {
      "Cateid": "cate2", "CateName": "Bia",
      "Products": [
        { "ProductId": "p4", "ProductName": "Heleiken", "Price": 500, "Image": "bai14/h4.png" },
        { "ProductId": "p5", "ProductName": "333", "Price": 400, "Image": "bai14/h5.png" },
        { "ProductId": "p6", "ProductName": "Sai Gon", "Price": 600, "Image": "bai14/h6.png" },
      ]
    },
  ]

  getCategories() {
    return this.datas
  }
}