import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Services
import { GaragesService } from './garages.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GaragesListComponent } from './garages-list/garages-list.component';
import { GaragesMapComponent } from './garages-map/garages-map.component';
import { GaragesItemComponent } from './garages-list/garages-item/garages-item.component';
import { GaragesStatusComponent } from './garages-status/garages-status.component';
import { InformationComponent } from './information/information.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

// Google maps
import { AgmCoreModule } from '@agm/core';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GaragesListComponent,
    GaragesMapComponent,
    GaragesItemComponent,
    GaragesStatusComponent,
    InformationComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCqStJn-IeAWouzlTtjtJ64YvqXf2fDxSI'
    })
  ],
  providers: [
    GaragesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
