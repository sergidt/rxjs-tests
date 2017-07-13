import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/bufferTime';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';


const vehicleTypes = ['Car', 'Bike', 'Truck'];

const getRangeValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

class Vehicle {
  constructor(public type: string, public speed: number) {}

  toString = () => `${this.type} at ${this.speed} km/h`;
}

const generateVehicle = () => new Vehicle(vehicleTypes[getRangeValue(0, vehicleTypes.length - 1)], getRangeValue(60, 120));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    const subject$ = new Subject<any>();

      Observable.interval(100)
                .map(_ => generateVehicle())
                .bufferTime(1000)
                .switchMap(x => x)
                .do(_ => console.log('WINDOW---------------------------------'))
                .subscribe(subject$);

/*    Observable.timeInterval(100)
              .map(_ => generateVehicle())
              // .windowTime(1000)
              .average(x => x.speed)
              .subscribe(subject$);*/



    subject$
    .subscribe(console.log);
  }
}
