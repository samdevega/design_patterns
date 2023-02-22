import { Document } from './Document'

class RegistrationRequest extends Document {
  public print(): void {
    this.printer.print(`Print registration request: ${ this.content }`)
  }
}

export { RegistrationRequest }
