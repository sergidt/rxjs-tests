import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../../../models/model';
import { countObservableItems } from '../../../utils/utils';

@Component({
    selector: 'summary-item',
    template: `<div class="summary-item" [style.background-color]="bgColor">
      <div class="icon {{iconClass}}"></div>
      <div>
        <div>counter: {{ counter$ | async }}</div>
        <div>speed: {{ (vehicles | async)?.speed }} km/h</div>
        <div>Speed Avg: {{ (speedAvg$ | async)?.toFixed(2) }} km/h</div>
      </div>
    </div>
              `,
    styles: [`
        .summary-item {
            border-radius: 5px;
            width: 280px;
            min-height: 80px;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 20px;
            color: white !important;
            font-size: 14px;
            margin-right: 20px;
        }

        .icon {
            padding-right: 20px;
            font-size: 40px;
            color: white !important;
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
