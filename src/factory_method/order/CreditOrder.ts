import { Order } from './Order'

class CreditOrder extends Order {
  constructor(amount: Number) {
    super(amount)
  }

  public validate(): boolean {
    const maximumCreditAmount = 5000
    const minimumCreditAmount = 1000
    return this.amount >= minimumCreditAmount && this.amount <= maximumCreditAmount
  }

  public pay(): void {
    console.info(`Order with credit amount ${ this.amount } is done`)
  }
}

export { CreditOrder }
