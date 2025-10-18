import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  getAllCustomers(): Customer[] {
    return this.customers;
  }

  addCustomer(createCustomerDto: CreateCustomerDto): Customer {
    const newCustomer = this.customers.push({
      id: this.customers.length + 1,
      ...createCustomerDto,
    }) as any;

    this.customers.push(newCustomer);
    return newCustomer;
  }
}
