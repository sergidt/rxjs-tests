export const vehicleTypes = ['Car', 'Bike', 'Truck'];

export const CAR = 'Car';
export const BIKE = 'Bike';
export const TRUCK = 'Truck';

export class Vehicle {
    constructor(public type: string, public speed: number) {}
    toString = () => `${this.type} at ${this.speed} km/h`;

}