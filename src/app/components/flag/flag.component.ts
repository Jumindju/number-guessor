import { Component, input } from '@angular/core';

export type FlagColors = 'green';

@Component({
  selector: 'app-flag',
  imports: [],
  templateUrl: './flag.component.html',
  styleUrl: './flag.component.scss',
})
export class FlagComponent {
  sizePx = input<number>(30);

  content = input<number | string | null>();

  flagColor = input<FlagColors>();
}
