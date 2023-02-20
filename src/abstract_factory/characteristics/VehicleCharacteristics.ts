import { Color, Model, VehicleType } from '.';

interface VehicleCharacteristics {
  vehicleType: VehicleType,
  color: Color,
  model: Model,
  power: Number,
  space?: Number
}

export { VehicleCharacteristics }
