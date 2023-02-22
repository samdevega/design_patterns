abstract class Order {
  protected amount: Number

  constructor(amount: Number) {
    this.amount = amount
  }

  public abstract validate(): boolean

  public abstract pay(): void
}

export { Order }
