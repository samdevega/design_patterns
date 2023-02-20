import { Color, Model } from '../characteristics'
import { Vehicle } from './Vehicle'

abstract class Car implements Vehicle {
  protected color: String
  protected model: Model
  protected power: Number
  protected space: Number

  constructor(color: Color, model: Model, power: Number, space: Number) {
    this.color = color
    this.model = model
    this.power = power
    this.space = space
  }

  public showCharacteristics(): void {}
}

export { Car }
