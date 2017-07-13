import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/startWith'
import { Observable } from 'rxjs/Observable';
import { BIKE, CAR, TRUCK, Vehicle } from '../../models/model';
import { countObservableItems } from '../../utils/utils';

@Component({
    selector: 'vehicles-summary',
    templateUrl: './vehicles-summary.component.html',
    styleUrls: ['./vehicles-summary.component.css']
})
export class VehiclesSummaryComponent implements OnInit {

    totalVehicles$: Observable<number>;
    cars$: Observable<Vehicle>;
    bikes$: Observable<Vehicle>;
    trucks$: Observable<Vehicle>;
    speedAvg$: Observable<number>;
    speedViolations$: Observable<number>;

    constructor(private vehicleService: VehicleService) {}

    ngOnInit() {

        this.totalVehicles$ = countObservableItems(this.vehicleService.vehicles$);

        this.cars$ = this.vehicleService.vehicles$.filter(v => v.type === CAR);

        this.bikes$ = this.vehicleService.vehicles$.filter(v => v.type === BIKE);

        this.trucks$ = this.vehicleService.vehicles$.filter(v => v.type === TRUCK);

        this.speedAvg$ = this.vehicleService.vehicles$.scan((total, cur) => (total + cur.speed) / 2, 0);

        this.speedViolations$ = countObservableItems(this.vehicleService.vehicles$
                             .filter(v => v.speed > 120));
    }

}
