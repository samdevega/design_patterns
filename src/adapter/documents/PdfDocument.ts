import { Document } from './Document'
import { PdfComponent } from './PdfComponent'

class PdfDocument implements Document {
  protected pdfComponent: PdfComponent

  constructor() {
    this.pdfComponent = new PdfComponent()
  }

  public print(): void {
    this.pdfComponent.sendPdfPrinter()
  }

  public render(): void {
    this.pdfComponent.startPdfRender()
    this.pdfComponent.refreshPdfRender()
    this.pdfComponent.endPdfRender()
  }

  public setContent(content: String): void {
    this.pdfComponent.setPdfContent(content)
  }
}

export { PdfDocument }
