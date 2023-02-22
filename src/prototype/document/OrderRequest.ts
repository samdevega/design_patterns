import { Document } from './Document'

class OrderRequest extends Document {
  public print(): void {
    this.printer.print(`Print order request: ${ this.content }`)
  }
}

export { OrderRequest }
