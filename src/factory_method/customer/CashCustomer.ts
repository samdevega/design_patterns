import { CashOrder, Order } from '../order'
import { Customer } from './Customer'

class CashCustomer extends Customer {
  protected createOrder(amount: Number): Order {
    return new CashOrder(amount)
  }
}

export { CashCustomer }
