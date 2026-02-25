import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RoadSignCard } from './components/road-sign-card/road-sign-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RoadSignCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('learn-pdr');
}
