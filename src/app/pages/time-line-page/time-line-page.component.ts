import { Component, signal } from '@angular/core';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { TimeLineComponent } from '../../components/time-line/time-line.component';
import { FlagComponent } from '../../components/flag/flag.component';
import { NumberInputComponent } from '../../components/number-input/number-input.component';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-time-line-page',
  imports: [
    TranslocoDirective,
    TimeLineComponent,
    FlagComponent,
    NumberInputComponent,
    DecimalPipe
  ],
  templateUrl: './time-line-page.component.html',
  styleUrl: './time-line-page.component.scss',
})
export class TimeLinePageComponent {
  minValue = signal(0);
  maxValue = signal(1000000);

  currentNumber = signal<number | null>(null);
  currentGuess = signal<number | null>(null);

  onNumberEntered(newNumber: number) {
    this.currentNumber.set(newNumber);
  }
}
