import { Component } from '@angular/core';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/bufferTime';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <a routerLink="/earth-quakes" routerLinkActive="active">Earth Quakes</a>
    <a routerLink="/vehicles-summary" routerLinkActive="active">Vehicles summary</a>
  </nav>
  <router-outlet></router-outlet>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
