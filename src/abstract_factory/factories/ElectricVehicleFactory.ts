import { Car, ElectricCar, ElectricScooter, Scooter } from '../vehicles'
import { Color, Model } from '../characteristics'
import { VehicleFactory } from '.'

class ElectricVehicleFactory implements VehicleFactory {
  buildCar(color: Color, model: Model, power: Number, space: Number): Car {
    return new ElectricCar(color, model, power, space)
  }
  buildScooter(color: Color, model: Model, power: Number): Scooter {
    return new ElectricScooter(color, model, power)
  }
}

export { ElectricVehicleFactory }
