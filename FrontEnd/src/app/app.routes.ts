import { Routes } from "@angular/router";
import { AddProperty } from "./property/add-property/add-property";
import { PropertyList } from "./property/property-list/property-list";
import { PropertyDetails } from "./property/property-details/property-details";
import {
  ADD_PROPERTY,
  EMPTY_STRING,
  RENT_PROPERTY,
  DETAILS_PROPERTY_ID,
} from "./constants/routesConstants";

export const routes: Routes = [
  { path: EMPTY_STRING, component: PropertyList },
  { path: RENT_PROPERTY, component: PropertyList },
  { path: ADD_PROPERTY, component: AddProperty },
  { path: DETAILS_PROPERTY_ID, component: PropertyDetails },
  { path: "**", component: PropertyList },
];
