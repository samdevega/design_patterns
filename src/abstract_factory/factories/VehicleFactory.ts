import { Car, Scooter } from '../vehicles'
import { Color, Model } from '../characteristics'

interface VehicleFactory {
  buildCar(color: Color, model: Model, power: Number, space: Number): Car

  buildScooter(color: Color, model: Model, power: Number): Scooter
}

export { VehicleFactory }
