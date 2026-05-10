import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { ADD_PROPERTY, RENT_PROPERTY, ROOT_PATH } from "../constants/routesConstants";

@Component({
  selector: "app-nav-bar",
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: "./nav-bar.html",
  styleUrl: "./nav-bar.scss",
  standalone: true,
})
export class NavBar {
  protected readonly title = "HSPA";

  ROOT_PATH = ROOT_PATH;
  RENT_PROPERTY = RENT_PROPERTY;
  ADD_PROPERTY = ADD_PROPERTY;
}
