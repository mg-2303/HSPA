import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  imports: [],
  templateUrl: './property-card.html',
  styleUrl: './property-card.scss',
})
export class PropertyCard {
  Property: any = {
    Id: 1,
    Name: 'Manav House',
    Type: 'House',
    Price: 8000,
  };
}
