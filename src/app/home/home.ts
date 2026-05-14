// home.component.ts
import { Component } from '@angular/core';
import { ClockComponent } from '../clock/clock';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClockComponent],
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