import { Customer } from './customer'

class Sale {
  private customer: Customer

  constructor(customer: Customer) {
    this.customer = customer
  }

  public make(amount: Number): void {
    this.customer.newOrder(amount)
  }
}

export { Sale }
