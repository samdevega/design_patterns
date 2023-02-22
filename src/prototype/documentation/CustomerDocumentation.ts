import { BlankDocumentation } from './BlankDocumentation';
import { Documentation } from './Documentation';

class CustomerDocumentation extends Documentation {
  constructor(information: String) {
    super()
    const blankDocumentation = BlankDocumentation.getInstance()
    const blankDocuments = blankDocumentation.getDocuments()
    blankDocuments.forEach(blankDocument => {
      const documentCopy = blankDocument.duplicate()
      documentCopy.fill(information)
      this.documents.push(documentCopy)
    })
  }

  public print() {
    this.documents.forEach(document => document.print())
  }
}

export { CustomerDocumentation }
