import { Routes } from "@angular/router";
import { AddProperty } from "./property/add-property/add-property";
import { PropertyList } from "./property/property-list/property-list";
import { PropertyDetails } from "./property/property-details/property-details";
import {
  ADD_PROPERTY,
  EMPTY_STRING,
  RENT_PROPERTY,
  DETAILS_PROPERTY_ID,
  USER_REGISTER,
  USER_LOGIN,
} from "./constants/routesConstants";
import { UserLogin } from "./user/user-login/user-login";
import { UserRegister } from "./user/user-register/user-register";

export const routes: Routes = [
  { path: EMPTY_STRING, component: PropertyList },
  { path: RENT_PROPERTY, component: PropertyList },
  { path: ADD_PROPERTY, component: AddProperty },
  { path: DETAILS_PROPERTY_ID, component: PropertyDetails },
  { path: USER_LOGIN, component: UserLogin },
  { path: USER_REGISTER, component: UserRegister },
  { path: "**", component: PropertyList },
];
