import { Printer } from '../Printer'

abstract class Document {
  protected content: String
  protected printer: Printer

  constructor() {
    this.content = ''
    this.printer = new Printer()
  }

  public duplicate(): Document {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
  }

  public fill(information: String): void {
    this.content = information
  }

  public abstract print(): void
}

export { Document }
