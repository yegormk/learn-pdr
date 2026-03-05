import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RoadSignPanel } from './components/road-sign-panel/road-sign-panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RoadSignPanel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('learn-pdr');
}
