import {
  Component,
  computed,
  contentChild,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import {
  TimeLineComponent,
  TimeLineNumberEvent,
} from '../../components/time-line/time-line.component';
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
    DecimalPipe,
  ],
  templateUrl: './time-line-page.component.html',
  styleUrl: './time-line-page.component.scss',
})
export class TimeLinePageComponent {
  minValue = signal(0);
  maxValue = signal(1000000);

  currentNumber = signal<number | null>(null);
  currentGuess = signal<number | null>(null);
  timeLineWidth = signal<number | null>(null);

  currentGuessOffset = computed(() => {
    const currentGuess = this.currentGuess();
    const timeLineWidth = this.timeLineWidth();

    if (!currentGuess || !timeLineWidth) {
      return 0;
    }

    const guessInPercent = currentGuess / this.maxValue();

    console.log(guessInPercent, timeLineWidth, currentGuess);
    return timeLineWidth * guessInPercent;
  });

  onNumberEntered(newNumber: number) {
    this.currentNumber.set(newNumber);
  }

  guessSelected({ selectedNumber, timeLineWidth }: TimeLineNumberEvent) {
    this.currentGuess.set(selectedNumber);
    this.timeLineWidth.set(timeLineWidth);
  }
}
