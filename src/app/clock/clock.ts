import { DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [DatePipe],
  templateUrl: './clock.html',
  styleUrls: ['./clock.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  currentTime: Date = new Date();
   intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    console.log('Clock stopped');
  }
}