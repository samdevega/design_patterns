import { DocumentationBuilder } from './DocumentationBuilder'
import { PdfDocumentation } from '../documentation'

class PdfDocumentationBuilder extends DocumentationBuilder {
  constructor() {
    super(new PdfDocumentation())
  }

  public buildOrderRequest(buyerName: String): void {
    let document = `<PDF>
      Order Request
      Buyer: ${ buyerName }
    </PDF>`
    this.documentation.addDocument(document)
  }

  public buildRegistrationRequest(requesterName: String): void {
    let document = `<PDF>
      Registration Request
      Requester: ${ requesterName }
    </PDF>`
    this.documentation.addDocument(document)
  }
}

export { PdfDocumentationBuilder }
