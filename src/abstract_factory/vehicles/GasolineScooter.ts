import { Scooter } from './Scooter'
import { Color, Model } from '../characteristics'

class GasolineScooter extends Scooter {
  constructor(color: Color, model: Model, power: Number) {
    super(color, model, power)
  }

  public showCharacteristics(): void {
    console.info(
      `${ this.constructor.name }\n`,
      `Model: ${ this.model }\n`,
      `Power: ${ this.power }`
    )
  }
}

export { GasolineScooter }
