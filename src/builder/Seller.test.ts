import { describe, expect, it, jest, beforeEach } from '@jest/globals'
import { HtmlDocumentationBuilder } from './builders/HtmlDocumentationBuilder'
import { PdfDocumentationBuilder } from './builders'
import { HtmlDocumentation, PdfDocumentation } from './documentation'
import { Seller } from './Seller'
import { Printer } from './Printer'

describe('Seller', () => {
  let seller: Seller
  const buyerName = 'John Doe'
  const printerSpy = jest.spyOn(Printer.prototype, 'print')

  describe('given an HTML documentation builder', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      seller = new Seller(new HtmlDocumentationBuilder())
    })

    it('should build documentation for a buyer', () => {
      const documentSpy = jest.spyOn(HtmlDocumentation.prototype, 'addDocument')
      seller.build(buyerName)

      expect(documentSpy).toHaveBeenCalledTimes(2)
    })

    it('should build documentation for a buyer in the proper format', () => {
      const documentation = seller.build(buyerName)

      documentation.print()

      expect(printerSpy.mock.calls[0][0]).toContain('<!DOCTYPE html>')
      expect(printerSpy.mock.calls[0][0]).toContain('Order Request')
      expect(printerSpy.mock.calls[0][0]).toContain(buyerName)
      expect(printerSpy.mock.calls[1][0]).toContain('<!DOCTYPE html>')
      expect(printerSpy.mock.calls[1][0]).toContain('Registration Request')
      expect(printerSpy.mock.calls[1][0]).toContain(buyerName)
    })
  })

  describe('given a PDF documentation builder', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      seller = new Seller(new PdfDocumentationBuilder())
    })

    it('should build documentation for a buyer', () => {
      const documentSpy = jest.spyOn(PdfDocumentation.prototype, 'addDocument')
      seller.build(buyerName)

      expect(documentSpy).toHaveBeenCalledTimes(2)
    })

    it('should build documentation for a buyer in the proper format', () => {
      const documentation = seller.build(buyerName)

      documentation.print()

      expect(printerSpy.mock.calls[0][0]).toContain('<PDF>')
      expect(printerSpy.mock.calls[0][0]).toContain('Order Request')
      expect(printerSpy.mock.calls[0][0]).toContain(buyerName)
      expect(printerSpy.mock.calls[1][0]).toContain('<PDF>')
      expect(printerSpy.mock.calls[1][0]).toContain('Registration Request')
      expect(printerSpy.mock.calls[1][0]).toContain(buyerName)
    })
  })
})
