import { Order } from '../order'

abstract class Customer {
  protected orders: Order[]

  constructor() {
    this.orders = []
  }

  protected abstract createOrder(amount: Number): Order

  public newOrder(amount: Number): void {
    const order = this.createOrder(amount)

    if (order.validate()) {
      order.pay()
      this.orders.push(order)
    }
  }
}

export { Customer }
