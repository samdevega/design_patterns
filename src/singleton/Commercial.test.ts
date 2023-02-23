import { describe, expect, it } from '@jest/globals'
import { Commercial } from './Commercial'

describe('Commercial', () => {
  it('should use the same instance between different calls', () => {
    const commercial = Commercial.getInstance()
    const sameCommercial = Commercial.getInstance()

    commercial.setAddress('Elm Street, 13')
    commercial.setEmail('john.doe@email.com')
    commercial.setName('John Doe')

    expect(sameCommercial.getAddress()).toEqual(commercial.getAddress())
    expect(sameCommercial.getEmail()).toEqual(commercial.getEmail())
    expect(sameCommercial.getName()).toEqual(commercial.getName())
  })
})
