import { Component, OnInit } from "@angular/core";
import Map from "ol/Map";
import View from "ol/View";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import OSM from "ol/source/OSM";
import * as olProj from "ol/proj";
import TileLayer from "ol/layer/Tile";
import { Builder } from "protractor";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-open-layer-map",
  templateUrl: "./open-layer-map.component.html",
  styleUrls: ["./open-layer-map.component.css"],
})
export class OpenLayerMapComponent implements OnInit {
  signup: FormGroup;
  signin: FormGroup;
  formData: any[];
  storage: any;
  data: any;
  hint: any;
  test: number;
  singnup(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("signin").style.display = "block";
  }
  singnin(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("signup").style.display = "block";
  }
  signupS() {
    this.formData = [];
    this.storage = JSON.parse(localStorage.getItem("fdata"));
    if (this.storage) {
      this.formData = this.storage;
    }
    this.formData = [
      ...this.formData,

      {
        email: this.signup.value.email,
        pass: this.signup.value.pass,
      },
    ];

    localStorage.setItem("fdata", JSON.stringify(this.formData));
    console.log(this.signup.value);
  }
  signinS() {
    this.test = 0;
    this.data = JSON.parse(localStorage.getItem("fdata"));
    for (let index = 0; index < this.data.length; index++) {
      if (
        this.signin.value.email == this.data[index].email &&
        this.signin.value.pass == this.data[index].pass
      ) {
        this.test++;
      } else {
        console.log("invalid user");
      }
    }
    if (this.test > 0) {
      this.router.navigate(["dashbord"]);
    } else {
      alert("invalid user");
    }
  }
  map: any;
  constructor(private builder: FormBuilder, private router: Router) {}

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
    this.signup = this.builder.group({
      email: ["", [Validators.required]],
      pass: ["", [Validators.required]],
    });
    this.signin = this.builder.group({
      email: ["", [Validators.required]],
      pass: ["", [Validators.required]],
    });
  }
}
