import { Documentation } from './documentation'
import { DocumentationBuilder } from './builders'

class Seller {
  protected documentationBuilder: DocumentationBuilder

  constructor(documentationBuilder: DocumentationBuilder) {
    this.documentationBuilder = documentationBuilder
  }

  public build(buyerName: String): Documentation {
    this.documentationBuilder.buildOrderRequest(buyerName)
    this.documentationBuilder.buildRegistrationRequest(buyerName)
    return this.documentationBuilder.result()
  }
}

export { Seller }
