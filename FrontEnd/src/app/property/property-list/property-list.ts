import { RENT_PROPERTY, TSellRent } from "./../../constants/routesConstants";
import { HousingService } from "./../../services/housing-service";
import { Component, OnInit } from "@angular/core";
import { PropertyCard } from "../property-card/property-card";
import { CommonModule } from "@angular/common";
import { IPropertyCard } from "../../interfaces/interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-property-list",
  imports: [PropertyCard, CommonModule],
  templateUrl: "./property-list.html",
  styleUrl: "./property-list.scss",
})
export class PropertyList implements OnInit {
  propertiesCards: Array<IPropertyCard> = [];
  sellRent: TSellRent = "Sell";

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly housingService: HousingService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url) => {
      this.sellRent = url[0]?.path === RENT_PROPERTY ? "Rent" : "Sell";
      this.loadProperties();
    });
  }

  loadProperties() {
    this.housingService.getAllProperties(this.sellRent).subscribe({
      next: (data) => (this.propertiesCards = data),
      error: (err) => console.error(err),
    });
  }
}
