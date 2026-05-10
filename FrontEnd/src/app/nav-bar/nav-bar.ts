import { Component } from "@angular/core";
import { Router, RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import {
  ADD_PROPERTY,
  RENT_PROPERTY,
  ROOT_PATH,
  USER_LOGIN,
  USER_REGISTER,
} from "../constants/routesConstants";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

@Component({
  selector: "app-nav-bar",
  imports: [RouterLink, RouterLinkActive, RouterModule, BrowserAnimationsModule, BsDropdownModule],
  templateUrl: "./nav-bar.html",
  styleUrl: "./nav-bar.scss",
  standalone: true,
})
export class NavBar {
  protected readonly title = "HSPA";

  ROOT_PATH = ROOT_PATH;
  RENT_PROPERTY = RENT_PROPERTY;
  ADD_PROPERTY = ADD_PROPERTY;
  USER_REGISTER = USER_REGISTER;
  USER_LOGIN = USER_LOGIN;

  constructor(private readonly router: Router) {}

  get isLoggedIn() {
    return localStorage.getItem("token");
  }

  onLogout() {
    localStorage.removeItem("token");
    this.router.navigate([USER_LOGIN]);
  }
}
