import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Gmap";
  lat: number = 22.350075806124863;
  lng: number = 79.541015625;
  submit(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
}
