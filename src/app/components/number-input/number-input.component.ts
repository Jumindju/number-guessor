import { Component, EventEmitter, input, signal } from '@angular/core';
import { MatInput, MatLabel, MatSuffix } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { FlagComponent } from "../flag/flag.component";

@Component({
  selector: 'app-number-input',
  imports: [
    MatInput,
    MatLabel,
    FormsModule,
    MatIcon,
    MatFormField,
    MatSuffix,
    MatIconButton,
    FlagComponent
],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss',
})
export class NumberInputComponent {
  value = signal<number | null>(null);

  min = input.required<number>();
  max = input.required<number>();

  onConfirm = new EventEmitter<number>();

  randomNumber() {
    const randomInt =
      Math.floor(Math.random() * (this.max() - this.min() + 1)) + this.min();

    this.value.set(randomInt);
  }
}
