import { describe, expect, it, jest, beforeEach } from '@jest/globals'
import { SpiedFunction } from 'jest-mock'
import { HtmlDocument, PdfDocument } from './documents'
import { PdfComponent } from './documents/PdfComponent'
import { Server } from './Server'

describe('Server', () => {
  const content = 'Hello World!'

  describe('given an HtmlDocument', () => {
    const server = new Server(new HtmlDocument())
    let htmlDocumentSpy: SpiedFunction<(content: String) => void>

    it('should generate its content', () => {
      htmlDocumentSpy = jest.spyOn(HtmlDocument.prototype, 'setContent')
      
      server.generateDocument(content)
      
      expect(htmlDocumentSpy).toHaveBeenCalledWith(content)
    })
    
    it('should print its content', () => {
      htmlDocumentSpy = jest.spyOn(HtmlDocument.prototype, 'print')
      
      server.printDocument()
      
      expect(htmlDocumentSpy).toHaveBeenCalled()
    })
    
    it('should render its content', () => {
      htmlDocumentSpy = jest.spyOn(HtmlDocument.prototype, 'render')

      server.renderDocument()

      expect(htmlDocumentSpy).toHaveBeenCalled()
    })
  })

  describe('given a PdfDocument', () => {
    const server = new Server(new PdfDocument())
    let pdfComponentSpy: SpiedFunction<(content: String) => void>

    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('should generate its content', () => {
      pdfComponentSpy = jest.spyOn(PdfComponent.prototype, 'setPdfContent')

      server.generateDocument(content)

      expect(pdfComponentSpy).toHaveBeenCalledWith(content)
    })

    it('should print its content', () => {
      pdfComponentSpy = jest.spyOn(PdfComponent.prototype, 'sendPdfPrinter')

      server.printDocument()

      expect(pdfComponentSpy).toHaveBeenCalled()
    })

    it('should render its content', () => {
      const pdfEndRenderSpy = jest.spyOn(PdfComponent.prototype, 'endPdfRender')
      const pdfRefreshRenderSpy = jest.spyOn(PdfComponent.prototype, 'refreshPdfRender')
      const pdfStartRenderSpy = jest.spyOn(PdfComponent.prototype, 'startPdfRender')

      server.renderDocument()
      
      expect(pdfEndRenderSpy).toHaveBeenCalled()
      expect(pdfRefreshRenderSpy).toHaveBeenCalled()
      expect(pdfStartRenderSpy).toHaveBeenCalled()
    })
  })
})
