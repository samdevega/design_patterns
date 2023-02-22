import { Documentation } from './Documentation'

class HtmlDocumentation extends Documentation {
  public addDocument(document: String): void {
    if (document.startsWith('<!DOCTYPE html>')) {
      this.content.push(document)
    }
  }

  public print(): void {
    this.content.forEach(document => {
      this.printer.print(document)
    })
  }
}

export { HtmlDocumentation }
