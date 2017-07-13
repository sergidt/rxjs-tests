import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../../../models/model';
import { countObservableItems } from '../../../utils/utils';

@Component({
    selector: 'summary-item',
    template: `<div class="summary-item" [style.background-color]="bgColor">
      <div class="icon {{iconClass}}"></div>
      <div class="data">
        <div>counter: {{ counter$ | async }}</div>
        <div>speed: {{ (vehicles | async)?.speed }} km/h</div>
        <div>Speed Avg: {{ (speedAvg$ | async)?.toFixed(2) }} km/h</div>
      </div>
    </div>
              `,
    styles: [`
        .summary-item {
            border-radius: 5px;
            min-height: 80px;
            display: flex;
            flex-direction: row;
            align-items: center;
            color: white !important;
            font-size: 20px;
            margin-right: 10px;
        }

        .icon {
            padding: 20px;
            font-size: 40px;
            color: white !important;
            border-right: solid 1px white;
        }

        .data {
            padding:  0 15px;
            min-width: 250px;
        }
    `]
})
export class SummaryItemComponent implements OnInit{
    @Input() iconClass: string;
    @Input() bgColor;

    @Input() vehicles: Observable<Vehicle>;
    counter$: Observable<number>;
    speedAvg$: Observable<number>;

    ngOnInit() {
        this.counter$ = countObservableItems(this.vehicles);

        this.speedAvg$ = this.vehicles.scan((total, cur) => (total + cur.speed) / 2, 0);
    }
}
