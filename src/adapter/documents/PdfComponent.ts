class PdfComponent {
  protected content: String

  public endPdfRender(): void {
    console.info(`Render PDF: End`)
  }
  
  public refreshPdfRender(): void {
    console.info(`Render PDF: ${ this.content }`)
  }

  public sendPdfPrinter(): void {
    console.info(`Print PDF: ${ this.content }`)
  }
  
  public setPdfContent(content: String):void {
    this.content = content
  }

  public startPdfRender(): void {
    console.info(`Render PDF: Start`)
  }
}

export { PdfComponent }
