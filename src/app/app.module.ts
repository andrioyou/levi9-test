import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Services
import { GaragesService } from './garages.service';
import { ShowGarageOnMapService } from './show-garage-on-map.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GaragesListComponent } from './garages-list/garages-list.component';
import { GaragesMapComponent } from './garages-map/garages-map.component';
import { GaragesItemComponent } from './garages-list/garages-item/garages-item.component';
import { GaragesStatusComponent } from './garages-status/garages-status.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Google maps
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GaragesListComponent,
    GaragesMapComponent,
    GaragesItemComponent,
    GaragesStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCqStJn-IeAWouzlTtjtJ64YvqXf2fDxSI'
    })
  ],
  providers: [
    GaragesService,
    ShowGarageOnMapService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
