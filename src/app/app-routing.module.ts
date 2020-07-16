import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashbordComponent } from "./dashbord/dashbord.component";
import { OpenLayerMapComponent } from "./open-layer-map/open-layer-map.component";

const routes: Routes = [
  {
    path: "dashbord",
    component: DashbordComponent,
  },
  {
    path: "",
    component: OpenLayerMapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
