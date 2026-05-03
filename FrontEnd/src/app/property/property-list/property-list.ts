import { HousingService } from "./../../services/housing-service";
import { Component } from "@angular/core";
import { PropertyCard } from "../property-card/property-card";
import { CommonModule } from "@angular/common";
import { error } from "console";
import { IPropertyCard } from "../../interfaces/interface";

@Component({
  selector: "app-property-list",
  imports: [PropertyCard, CommonModule],
  templateUrl: "./property-list.html",
  styleUrl: "./property-list.scss",
})
export class PropertyList {
  propertiesCards: Array<IPropertyCard> = [];

  constructor(private readonly housingService: HousingService) {
    this.housingService.getAllProperties().subscribe(
      (data) => {
        this.propertiesCards = data;
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
