import { describe, expect, it, jest, beforeEach } from '@jest/globals'
import { Consultant } from './Consultant'
import { AssignmentCertificate, OrderRequest, RegistrationRequest } from './document'
import { BlankDocumentation } from './documentation'
import { Printer } from './Printer'

describe('Consultant', () => {
  const assignmentCertificateSpy = jest.spyOn(AssignmentCertificate.prototype, 'print')
  const orderRequestSpy = jest.spyOn(OrderRequest.prototype, 'print')
  const registrationRequestSpy = jest.spyOn(RegistrationRequest.prototype, 'print')
  const printerSpy = jest.spyOn(Printer.prototype, 'print')

  describe('given a customer', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      BlankDocumentation['instance'] = undefined
    })

    it('should make its documentation', () => {
      const consultant = new Consultant(['Frank'])
      
      consultant.makeCustomersDocumentation()
      
      expect(assignmentCertificateSpy).toHaveBeenCalled()
      expect(orderRequestSpy).toHaveBeenCalled()
      expect(registrationRequestSpy).toHaveBeenCalled()
      expect(printerSpy.mock.calls[0][0]).toContain('Frank')
      expect(printerSpy.mock.calls[1][0]).toContain('Frank')
      expect(printerSpy.mock.calls[2][0]).toContain('Frank')
    })
  })

  describe('given some customers', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      BlankDocumentation['instance'] = undefined
    })

    it('should make some customers documentation', () => {
      const consultant = new Consultant(['Joseph', 'Carl'])
      
      consultant.makeCustomersDocumentation()
      
      expect(assignmentCertificateSpy).toHaveBeenCalledTimes(2)
      expect(orderRequestSpy).toHaveBeenCalledTimes(2)
      expect(registrationRequestSpy).toHaveBeenCalledTimes(2)
      expect(printerSpy.mock.calls[0][0]).toContain('Joseph')
      expect(printerSpy.mock.calls[1][0]).toContain('Joseph')
      expect(printerSpy.mock.calls[2][0]).toContain('Joseph')
      expect(printerSpy.mock.calls[3][0]).toContain('Carl')
      expect(printerSpy.mock.calls[4][0]).toContain('Carl')
      expect(printerSpy.mock.calls[5][0]).toContain('Carl')
    })
  })
})
