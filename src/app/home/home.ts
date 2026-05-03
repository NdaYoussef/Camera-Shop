// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  features = [
    { num: '01', label: 'Universal Compatibility'       },
    { num: '02', label: 'Real-Time Eye AF Technology'   },
    { num: '03', label: 'High-Speed BIONZ XR Processing'},
  ];
}