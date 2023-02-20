import { Car } from './Car'
import { Color, Model } from '../characteristics'

class GasolineCar extends Car {
  constructor(color: Color, model: Model, power: Number, space: Number) {
    super(color, model, power, space)
  }

  public showCharacteristics(): void {
    console.info(
      `${ this.constructor.name }\n`,
      `Model: ${ this.model }\n`,
      `Power: ${ this.power }\n`,
      `Space: ${ this.space }`
    )
  }
}

export { GasolineCar }
