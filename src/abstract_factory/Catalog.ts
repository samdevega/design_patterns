import { VehicleCharacteristics, VehicleType } from './characteristics'
import { Vehicle } from './vehicles'
import { VehicleFactory } from './factories'

class Catalog {
  private vehicleFactory: VehicleFactory
  private vehicles: Vehicle[]

  constructor(vehicleFactory: VehicleFactory) {
    this.vehicleFactory = vehicleFactory
    this.vehicles = []
  }

  public buildVehicle({
    vehicleType,
    color,
    model,
    power,
    space
  }: VehicleCharacteristics): void {    
    switch (vehicleType) {
      case VehicleType.Car:
        this.vehicles.push(
          this.vehicleFactory.buildCar(
            color,
            model,
            power,
            space || 0
          )
        )
        break;
      case VehicleType.Scooter:
        this.vehicles.push(
          this.vehicleFactory.buildScooter(
            color,
            model,
            power
          )
        )
        break;
      default:
        throw new Error(`Vehicle type ${vehicleType} not implemented.`)
    }
  }

  public listVehicles(): void {
    this.vehicles.forEach(vehicle => vehicle.showCharacteristics())
  }
}

export { Catalog }
