import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimeLinePageComponent } from './pages/time-line-page/time-line-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimeLinePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
