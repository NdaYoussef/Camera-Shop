// header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  navLinks = [
    { label: 'Cameras',     active: true  },
    { label: 'Lenses',      active: false },
    { label: 'Lighting',    active: false },
    { label: 'Accessories', active: false },
    { label: 'Support',     active: false },
  ];
}