import { describe, expect, it, jest, beforeEach } from '@jest/globals'
import { CashCustomer, CreditCustomer } from './customer'
import { CashOrder, CreditOrder } from './order'
import { Sale } from './Sale'

describe('Sale', () => {
  describe('given a customer who pays in cash', () => {
    let sale: Sale
    
    beforeEach(() => {
      sale = new Sale(new CashCustomer())
      jest.clearAllMocks()
    })

    it('should make an order', () => {
      const cashOrderSpy = jest.spyOn(CashOrder.prototype, 'pay')

      sale.make(4000)

      expect(cashOrderSpy).toHaveBeenCalledTimes(1)
    })

    it('should make multiple order', () => {
      const cashOrderSpy = jest.spyOn(CashOrder.prototype, 'pay')

      sale.make(3000)
      sale.make(2000)

      expect(cashOrderSpy).toHaveBeenCalledTimes(2)
    })
  })

  describe('given a customer who pays in credit', () => {
    let sale: Sale
    
    beforeEach(() => {
      sale = new Sale(new CreditCustomer())
      jest.clearAllMocks()
    })

    it('should make an order', () => {
      const creditOrderSpy = jest.spyOn(CreditOrder.prototype, 'pay')

      sale.make(2500)

      expect(creditOrderSpy).toHaveBeenCalledTimes(1)
    })

    it('should make multiple order', () => {
      const creditOrderSpy = jest.spyOn(CreditOrder.prototype, 'pay')

      sale.make(2000)
      sale.make(3000)

      expect(creditOrderSpy).toHaveBeenCalledTimes(2)
    })

    it('should not make an order less than 1000', () => {
      const creditOrderSpy = jest.spyOn(CreditOrder.prototype, 'pay')

      sale.make(999.99)

      expect(creditOrderSpy).toHaveBeenCalledTimes(0)
    })

    it('should not make an order bigger than 5000', () => {
      const creditOrderSpy = jest.spyOn(CreditOrder.prototype, 'pay')

      sale.make(5000.01)

      expect(creditOrderSpy).toHaveBeenCalledTimes(0)
    })
  })
})
