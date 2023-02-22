import { CreditOrder, Order } from '../order'
import { Customer } from './Customer'

class CreditCustomer extends Customer {
  protected createOrder(amount: Number): Order {
    return new CreditOrder(amount)
  }
}

export { CreditCustomer }
