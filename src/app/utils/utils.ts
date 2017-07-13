import { Vehicle, vehicleTypes } from '../models/model';
import { Observable } from 'rxjs/Observable';
export const getRangeValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateVehicle = () => new Vehicle(vehicleTypes[getRangeValue(0, vehicleTypes.length - 1)], getRangeValue(60, 120));

export const countObservableItems = (obs: Observable<any>) => obs.scan((total, _) => total + 1, 0);
