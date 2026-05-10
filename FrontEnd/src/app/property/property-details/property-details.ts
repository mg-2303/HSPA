import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { DETAILS_PROPERTY } from "../../constants/routesConstants";

@Component({
  selector: "app-property-details",
  imports: [RouterLink],
  templateUrl: "./property-details.html",
  styleUrl: "./property-details.scss",
})
export class PropertyDetails implements OnInit {
  public propertyCardId: number = 1;
  DETAILS_PROPERTY = DETAILS_PROPERTY;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}
  ngOnInit(): void {
    this.propertyCardId = +this.route.snapshot.params["id"];
    this.route.params.subscribe((params) => {
      this.propertyCardId = +params["id"];
    });
  }

  onSelectNext() {
    this.propertyCardId += 1;
    this.router.navigate([DETAILS_PROPERTY, this.propertyCardId]);
  }
}
