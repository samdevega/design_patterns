import { Document } from './documents'

class Server {
  private document: Document

  constructor(document: Document) {
    this.document = document
  }

  public generateDocument(content: String): void {
    this.document.setContent(content)
  }

  public printDocument(): void {
    this.document.print()
  }

  public renderDocument(): void {
    this.document.render()
  }
}

export { Server }
