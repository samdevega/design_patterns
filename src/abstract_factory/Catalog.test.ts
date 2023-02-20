import { describe, expect, it, jest } from '@jest/globals'
import { Catalog } from './Catalog'
import { Color, Model, VehicleType } from './characteristics'
import { ElectricVehicleFactory, GasolineVehicleFactory } from './factories'
import { ElectricCar, ElectricScooter, GasolineCar, GasolineScooter } from './vehicles'
jest.mock('./vehicles/ElectricCar')
jest.mock('./vehicles/ElectricScooter')
jest.mock('./vehicles/GasolineCar')
jest.mock('./vehicles/GasolineScooter')

describe('Catalog', () => {
  describe('given an electric vehicle factory', () => {
    const catalog = new Catalog(new ElectricVehicleFactory())

    it('should build an electric car with the proper characteristics', () => {
      const carCharacteristics = {
        color: Color.Black,
        model: Model.Sport,
        power: 400,
        space: 6
      }
      catalog.buildVehicle({
        vehicleType: VehicleType.Car,
        ...carCharacteristics
      })

      expect(ElectricCar).toHaveBeenCalledWith(...Object.values(carCharacteristics))
    })

    it('should build an electric scooter with the proper characteristics', () => {
      const scooterCharacteristics = {
        color: Color.Red,
        model: Model.Classic,
        power: 100
      }
      catalog.buildVehicle({
        vehicleType: VehicleType.Scooter,
        ...scooterCharacteristics
      })

      expect(ElectricScooter).toHaveBeenCalledWith(...Object.values(scooterCharacteristics))
    })

    it('should list its built vehicles', () => {
      const carShowCharacteristics = jest.spyOn(ElectricCar.prototype, 'showCharacteristics')
      const scooterShowCharacteristics = jest.spyOn(ElectricScooter.prototype, 'showCharacteristics')
      const catalog = new Catalog(new ElectricVehicleFactory())
      catalog.buildVehicle({
        vehicleType: VehicleType.Car,
        color: Color.Black,
        model: Model.Sport,
        power: 400,
        space: 6
      })
      catalog.buildVehicle({
        vehicleType: VehicleType.Scooter,
        color: Color.White,
        model: Model.Urban,
        power: 300
      })
  
      catalog.listVehicles()
  
      expect(carShowCharacteristics).toHaveBeenCalledTimes(1)
      expect(scooterShowCharacteristics).toHaveBeenCalledTimes(1)
    })
  })

  describe('given a gasoline vehicle factory', () => {
    const catalog = new Catalog(new GasolineVehicleFactory())

    it('should build a gasoline car with the proper characteristics', () => {
      const carCharacteristics = {
        color: Color.White,
        model: Model.Urban,
        power: 300,
        space: 8
      }
      catalog.buildVehicle({
        vehicleType: VehicleType.Car,
        ...carCharacteristics
      })

      expect(GasolineCar).toHaveBeenCalledWith(...Object.values(carCharacteristics))
    })

    it('should build a gasoline scooter with the proper characteristics', () => {
      const scooterCharacteristics = {
        color: Color.Blue,
        model: Model.Sport,
        power: 150
      }
      catalog.buildVehicle({
        vehicleType: VehicleType.Scooter,
        ...scooterCharacteristics
      })

      expect(GasolineScooter).toHaveBeenCalledWith(...Object.values(scooterCharacteristics))
    })

    it('should list its built vehicles', () => {
      const carShowCharacteristics = jest.spyOn(GasolineCar.prototype, 'showCharacteristics')
      const scooterShowCharacteristics = jest.spyOn(GasolineScooter.prototype, 'showCharacteristics')
      const catalog = new Catalog(new GasolineVehicleFactory())
      catalog.buildVehicle({
        vehicleType: VehicleType.Car,
        color: Color.Black,
        model: Model.Sport,
        power: 400,
        space: 6
      })
      catalog.buildVehicle({
        vehicleType: VehicleType.Scooter,
        color: Color.White,
        model: Model.Urban,
        power: 300
      })
  
      catalog.listVehicles()
  
      expect(carShowCharacteristics).toHaveBeenCalledTimes(1)
      expect(scooterShowCharacteristics).toHaveBeenCalledTimes(1)
    })
  })
})
