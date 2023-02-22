import { AssignmentCertificate, OrderRequest, RegistrationRequest } from './document'
import { BlankDocumentation, CustomerDocumentation } from './documentation'

class Consultant {
  private customers: String[]

  constructor(customers: String[]) {
    this.customers = customers
  }

  public makeCustomersDocumentation() {
    const blankDocumentation = BlankDocumentation.getInstance()

    blankDocumentation.include(new AssignmentCertificate())
    blankDocumentation.include(new OrderRequest())
    blankDocumentation.include(new RegistrationRequest())
    this.customers.forEach(customer => {
      new CustomerDocumentation(customer).print()
    })
  }
}

export { Consultant }
