import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { IPropertyCard } from "../../interfaces/interface";
import { DETAILS_PROPERTY } from "../../constants/routesConstants";

@Component({
  selector: "app-property-card",
  imports: [CommonModule, RouterLink],
  templateUrl: "./property-card.html",
  styleUrl: "./property-card.scss",
})
export class PropertyCard {
  @Input() propertyCard!: IPropertyCard;
  DETAILS_PROPERTY = DETAILS_PROPERTY;
}
