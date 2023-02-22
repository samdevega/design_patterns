import { Documentation } from '../documentation'

abstract class DocumentationBuilder {
  protected documentation: Documentation

  constructor(documentation: Documentation) {
    this.documentation = documentation
  }

  public abstract buildOrderRequest(buyerName: String): void

  public abstract buildRegistrationRequest(requesterName: String): void

  public result(): Documentation {
    return this.documentation
  }
}

export { DocumentationBuilder }
