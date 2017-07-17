import { Component, OnInit } from '@angular/core';
import { mainJS } from './earth-quakes-script';

@Component({
  selector: 'earth-quakes',
  templateUrl: './earth-quakes.component.html',
  styleUrls: ['./earth-quakes.component.css']
})
export class EarthQuakesComponent implements OnInit {

  ngOnInit() {
    mainJS();
  }

}
