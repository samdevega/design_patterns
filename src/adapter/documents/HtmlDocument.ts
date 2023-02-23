import { Document } from './Document'
import { Printer } from '../Printer'

class HtmlDocument implements Document {
  protected content: String
  private printer: Printer

  constructor() {
    this.printer = new Printer()
  }

  public print(): void {
    this.printer.print(`Print HTML Document: ${ this.content }`)
  }

  public render(): void {
    this.printer.print(`Render HTML Document: ${ this.content }`)
  }

  public setContent(content: String): void {
    this.content = content
  }
}

export { HtmlDocument }
