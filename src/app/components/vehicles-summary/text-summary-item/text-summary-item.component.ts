import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'text-summary-item',
    template: `<div class="summary-item" [style.background-color]="bgColor">
      <div class="title">{{ title }}</div>
      <div class="value">
        <div>{{ value }} {{ suffix}}</div>
      </div>
    </div>
              `,
    styles: [`

        .title {
            font-size: 32px;
            padding: 10px;
            border-bottom: solid 1px white;
        }

        .summary-item {
            border-radius: 5px;
            min-width: 357px;
            min-height: 30px;
            align-items: center;
            color: white !important;
            font-size: 14px;
            margin-right: 20px;
        }

        .value {
            font-size: 50px;
            padding: 10px;
        }
    `],
    encapsulation: ViewEncapsulation.Emulated
})
export class TextSummaryItemComponent  {

    @Input() title: string;
    @Input() value: any;
    @Input() suffix: string;
    @Input() bgColor;
}
