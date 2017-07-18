import { Component, OnInit } from '@angular/core';
import { mainJS } from './earth-quakes-js';
import { mainPromises } from './earth-quakes-promises';
import { mainFRP } from './earth-quakes-frp';

@Component({
    selector: 'earth-quakes',
    template: `
              `,
    styles: [`

    `]
})
export class EarthQuakesComponent implements OnInit {

    ngOnInit() {
        mainJS();
        mainPromises();
        mainFRP();
    }
}
