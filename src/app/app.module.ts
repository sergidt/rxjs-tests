import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VehicleService } from './services/vehicle.service';
import { VehiclesSummaryComponent } from './components/vehicles-summary/vehicles-summary.component';
import { SummaryItemComponent } from './components/vehicles-summary/summary-item/summary-item.component';
import { TextSummaryItemComponent } from './components/vehicles-summary/text-summary-item/text-summary-item.component';
import { AppRoutingModule } from './app-routing.module';
import { EarthQuakesComponent } from './components/earth-quakes/earth-quakes.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesSummaryComponent,
    SummaryItemComponent,
    TextSummaryItemComponent,
    EarthQuakesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
