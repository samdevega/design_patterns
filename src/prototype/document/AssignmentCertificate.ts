import { Document } from './Document'

class AssignmentCertificate extends Document {
  public print(): void {
    this.printer.print(`Print assignment certificate: ${ this.content }`)
  }
}

export { AssignmentCertificate }
