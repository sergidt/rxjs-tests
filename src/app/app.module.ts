import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VehicleService } from './services/vehicle.service';
import { VehiclesSummaryComponent } from './components/vehicles-summary/vehicles-summary.component';
import { SummaryItemComponent } from './components/vehicles-summary/summary-item/summary-item.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesSummaryComponent,
    SummaryItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
