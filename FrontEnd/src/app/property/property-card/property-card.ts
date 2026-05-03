import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-property-card",
  imports: [CommonModule],
  templateUrl: "./property-card.html",
  styleUrl: "./property-card.scss",
})
export class PropertyCard {
  @Input() propertyCard!: any;
}
