import { Component } from '@angular/core';
import { PropertyCard } from '../property-card/property-card';

@Component({
  selector: 'app-property-list',
  imports: [PropertyCard],
  templateUrl: './property-list.html',
  styleUrl: './property-list.scss',
})
export class PropertyList {}
