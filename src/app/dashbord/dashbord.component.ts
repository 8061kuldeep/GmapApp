import { Component, OnInit } from "@angular/core";
import Map from "ol/Map";
import View from "ol/View";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import OSM from "ol/source/OSM";
import * as olProj from "ol/proj";
import TileLayer from "ol/layer/Tile";
@Component({
  selector: "app-dashbord",
  templateUrl: "./dashbord.component.html",
  styleUrls: ["./dashbord.component.css"],
})
export class DashbordComponent implements OnInit {
  map: any;

  constructor() {}

  ngOnInit(): void {
    this.map = new Map({
      target: "hotel_map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: olProj.fromLonLat([7.0785, 51.4614]),
        zoom: 5,
      }),
    });
  }
}
