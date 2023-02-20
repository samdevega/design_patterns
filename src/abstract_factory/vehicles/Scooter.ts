import { Color, Model } from '../characteristics'
import { Vehicle } from './Vehicle'

abstract class Scooter implements Vehicle {
  protected color: Color
  protected model: Model
  protected power: Number

  constructor(color: Color, model: Model, power: Number) {
    this.color = color
    this.model = model
    this.power = power
  }

  public showCharacteristics(): void {}
}

export { Scooter }
