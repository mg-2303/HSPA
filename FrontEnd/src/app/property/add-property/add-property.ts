import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-property",
  imports: [],
  templateUrl: "./add-property.html",
  styleUrl: "./add-property.scss",
})
export class AddProperty {
  constructor(private readonly router: Router) {}

  onBack() {
    this.router.navigate(["/"]);
  }
}
