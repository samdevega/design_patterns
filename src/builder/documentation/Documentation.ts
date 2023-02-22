import { Printer } from '../Printer'

abstract class Documentation {
  protected content: String[]
  protected printer: Printer

  constructor() {
    this.content = []
    this.printer = new Printer()
  }

  public abstract addDocument(document: String): void

  public abstract print(): void
}

export { Documentation }
