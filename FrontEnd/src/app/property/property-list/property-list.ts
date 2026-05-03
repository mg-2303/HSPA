import { HousingService } from "./../../services/housing-service";
import { Component, OnInit } from "@angular/core";
import { PropertyCard } from "../property-card/property-card";
import { CommonModule } from "@angular/common";
import { IPropertyCard } from "../../interfaces/interface";

@Component({
  selector: "app-property-list",
  imports: [PropertyCard, CommonModule],
  templateUrl: "./property-list.html",
  styleUrl: "./property-list.scss",
})
export class PropertyList implements OnInit {
  propertiesCards: Array<IPropertyCard> = [];

  constructor(private readonly housingService: HousingService) {}

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe({
      next: (data) => (this.propertiesCards = data),
      error: (err) => console.error(err),
    });
  }
}
