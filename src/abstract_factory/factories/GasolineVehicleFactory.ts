import { Car, GasolineCar, GasolineScooter, Scooter } from '../vehicles'
import { Color, Model } from '../characteristics'
import { VehicleFactory } from '.'

class GasolineVehicleFactory implements VehicleFactory {
  buildCar(color: Color, model: Model, power: Number, space: Number): Car {
    return new GasolineCar(color, model, power, space)
  }
  buildScooter(color: Color, model: Model, power: Number): Scooter {
    return new GasolineScooter(color, model, power)
  }
}

export { GasolineVehicleFactory }
