import { Printer } from '../Printer'

abstract class Order {
  protected amount: Number
  protected printer: Printer

  constructor(amount: Number) {
    this.amount = amount
    this.printer = new Printer()
  }

  public abstract validate(): boolean

  public abstract pay(): void
}

export { Order }
