import { Component, ChangeDetectorRef } from '@angular/core';
import { CustomerService } from '../customer';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  styleUrl: './customer-list.css',
  templateUrl: './customer-list.html',
})
export class CustomerList {
  public customerGroups: any = []

  constructor(private customerService: CustomerService, private cdr: ChangeDetectorRef) {
    this.customerService.getCustomers().subscribe({
      next: (data: any) => {
        this.customerGroups = data
        this.cdr.markForCheck()
      },
      error: (err) => {
        console.error('Loi khi lay du lieu:', err)
      }
    })
  }
}