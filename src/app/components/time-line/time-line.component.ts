import { DecimalPipe } from '@angular/common';
import { Component, effect, input, signal } from '@angular/core';

@Component({
  selector: 'app-time-line',
  imports: [DecimalPipe],
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.scss',
})
export class TimeLineComponent {
  min = input.required<number>();
  max = input.required<number>();
  markerCount = input<number>();

  markers = signal<number[]>([]);

  constructor() {
    effect(() => {
      const min = this.min();
      const max = this.max();

      const markerAmount = this.markerCount() ?? max;
      const markerSteps = max / markerAmount;

      const newMarkers = [];
      for (let i = min; i <= max; i += markerSteps) {
        newMarkers.push(i);
      }

      this.markers.set(newMarkers);
    });
  }
}
