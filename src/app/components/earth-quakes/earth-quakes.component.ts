import { Component, OnInit } from '@angular/core';
import { mainJS } from './earth-quakes-script';

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
  }
}
