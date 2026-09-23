import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class CustomerService {
  private http = inject(HttpClient);

  getCustomers() {
    return this.http.get<any[]>('bai18/data/customers.json');
  }
}