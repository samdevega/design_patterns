import { DocumentationBuilder } from './DocumentationBuilder'
import { HtmlDocumentation } from '../documentation'

class HtmlDocumentationBuilder extends DocumentationBuilder {
  constructor() {
    super(new HtmlDocumentation())
  }

  public buildOrderRequest(buyerName: String): void {
    let document = `<!DOCTYPE html>
      <body>
        <h1>Order Request</h1>
        <strong>Buyer: </strong>${ buyerName }
      </body>
    </html>`
    this.documentation.addDocument(document)
  }

  public buildRegistrationRequest(requesterName: String): void {
    let document = `<!DOCTYPE html>
      <body>
        <h1>Registration Request</h1>
        <strong>Requester: </strong>${ requesterName }
      </body>
    </html>`
    this.documentation.addDocument(document)
  }
}

export { HtmlDocumentationBuilder }
