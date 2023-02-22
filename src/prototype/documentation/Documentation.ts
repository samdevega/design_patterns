import { Document } from '../document'

abstract class Documentation {
  protected documents: Document[]

  constructor() {
    this.documents = []
  }

  public getDocuments(): Document[] {
    return this.documents
  }
}

export { Documentation }
