import { DecimalPipe } from '@angular/common';
import { Component, computed, effect, input, signal } from '@angular/core';

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
  indicatorPerMarker = input<number>();
  indicatorMid = computed(() => {
    const indicatorPerMarker = this.indicatorPerMarker() ?? 0;
    return (indicatorPerMarker / 2) - 1;
  });

  markers = signal<number[]>([]);
  indicators = signal<number[]>([]);

  constructor() {
    effect(() => {
      const min = this.min();
      const max = this.max();

      const markerAmount = this.markerCount() ?? max;
      const markerStep = max / markerAmount;

      const indicatorPerMarker = this.indicatorPerMarker() ?? 1;
      const indicatorStep = markerStep / indicatorPerMarker;

      const newMarkers = [];
      const newIndicators: number[] = [];

      for (let marker = min; marker <= max; marker += markerStep) {
        newMarkers.push(marker);

        if (indicatorPerMarker === 1 || marker === max) {
          continue;
        }

        const markerPercent = (marker / max) * 100;
        const indicatorPercent = (indicatorStep / max) * 100;
        for (let indicator = 1; indicator < indicatorPerMarker; indicator++) {
          newIndicators.push(markerPercent + indicatorPercent * indicator);
        }
      }

      this.markers.set(newMarkers);
      this.indicators.set(newIndicators);
    });
  }
}
