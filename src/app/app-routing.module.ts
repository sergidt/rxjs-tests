import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesSummaryComponent } from './components/vehicles-summary/vehicles-summary.component';
import { EarthQuakesComponent } from './components/earth-quakes/earth-quakes.component';

const appRoutes: Routes = [
    {
        path: 'earth-quakes',
        component: EarthQuakesComponent
    },{
    path: 'vehicles-summary',
    component: VehiclesSummaryComponent
  },
  { path: '**', component: VehiclesSummaryComponent }
];

@NgModule({
  imports: [
      CommonModule,
    RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: false
        }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
