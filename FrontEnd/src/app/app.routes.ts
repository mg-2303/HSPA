import { Routes } from "@angular/router";
import { AddProperty } from "./property/add-property/add-property";
import { PropertyList } from "./property/property-list/property-list";

export const routes: Routes = [
  { path: "", component: PropertyList },
  { path: "add-property", component: AddProperty },
];
