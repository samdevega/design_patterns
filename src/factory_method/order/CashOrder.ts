import { Order } from './Order'

class CashOrder extends Order {
  constructor(amount: Number) {
    super(amount)
  }

  public validate(): boolean {
    return true
  }

  public pay(): void {
    this.printer.print(`Order with cash amount ${ this.amount } is done`)
  }
}

export { CashOrder }
