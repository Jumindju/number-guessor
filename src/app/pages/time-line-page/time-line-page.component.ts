import { Component } from '@angular/core';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { TimeLineComponent } from "../../components/time-line/time-line.component";

@Component({
  selector: 'app-time-line-page',
  imports: [
    TranslocoDirective,
    TimeLineComponent
],
  templateUrl: './time-line-page.component.html',
  styleUrl: './time-line-page.component.scss'
})
export class TimeLinePageComponent {

}
