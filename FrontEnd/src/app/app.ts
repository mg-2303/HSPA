import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyList } from './property/property-list/property-list';
import { NavBar } from './nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PropertyList, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
