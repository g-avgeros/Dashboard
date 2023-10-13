import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OrdersComponent } from './orders/orders.component';
import { HoursComponent } from './hours/hours.component';
import { ConnectorTypeComponent } from './connector-type/connector-type.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { TotalLocationsComponent } from './total-locations/total-locations.component';
import { TotalKwhComponent } from './total-kwh/total-kwh.component';
import { TotalRevenueComponent } from './total-revenue/total-revenue.component';
import { TotalSessionsComponent } from './total-sessions/total-sessions.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    FooterComponent,
    NavBarComponent,
    OrdersComponent,
    HoursComponent,
    ConnectorTypeComponent,
    TotalLocationsComponent,
    TotalKwhComponent,
    TotalRevenueComponent,
    TotalSessionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
