import { Documentation } from './Documentation'

class PdfDocumentation extends Documentation {
  public addDocument(document: String): void {
    if (document.startsWith('<PDF>')) {
      this.content.push(document)
    }
  }

  public print(): void {
    this.content.forEach(document => {
      this.printer.print(document)
    })
  }
}

export { PdfDocumentation }
