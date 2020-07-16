import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";
import "leaflet";
const L = window["L"];
import { AgmCoreModule } from "@agm/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";
import { OpenLayerMapComponent } from "./open-layer-map/open-layer-map.component";
import { DashbordComponent } from './dashbord/dashbord.component';
@NgModule({
  declarations: [AppComponent, MapComponent, OpenLayerMapComponent, DashbordComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCi0TI_pDbJLgFdk1FjikU7aEYFsbYTsCQ",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
