import { AfterViewInit, Component, OnInit } from "@angular/core";
import * as L from "leaflet";
@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements AfterViewInit {
  btn = "Sign up";
  map: any;
  singnup(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("signin").style.display = "block";
  }
  singnin(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("signup").style.display = "block";
  }
  constructor() {}
  private initMap(): void {
    this.map = L.map("map", {
      center: [20.5937, 78.9629],
      zoom: 5,
    });
  }
  click(event) {
    console.log(event);
    console.log("karan");
  }

  ngAfterViewInit(): void {
    this.initMap();
    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }
}
