import { Component } from "@angular/core";
import { PropertyCard } from "../property-card/property-card";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-property-list",
  imports: [PropertyCard, CommonModule],
  templateUrl: "./property-list.html",
  styleUrl: "./property-list.scss",
})
export class PropertyList {
  propertiesCards: Array<any> = [
    {
      id: 1,
      name: "Manav House",
      type: "House",
      price: 8000,
    },
    {
      id: 1,
      name: "Manav House",
      type: "House",
      price: 8000,
    },
    {
      id: 1,
      name: "Manav House",
      type: "House",
      price: 8000,
    },
  ];
}
