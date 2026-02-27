import {Component, computed, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';

import {AvailableOptions, RoadSign} from '../../interfaces/road-sign';
import {NgClass} from '@angular/common';
import {RoadSignsService} from '../../services/road-signs-service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-road-sign-card',
  imports: [
    MatButton,
    MatRadioButton,
    MatRadioGroup,
    NgClass
  ],
  templateUrl: './road-sign-card.html',
  styleUrl: './road-sign-card.scss',
})
export class RoadSignCard {
  private roadSignsService = inject(RoadSignsService);
  private _snackBar = inject(MatSnackBar);
  readonly currentRoadSign =  this.roadSignsService.currentRoadSign;
  finalized: WritableSignal<boolean> = signal(false);
  currentlyChosenOption!: string | null;

  finalizeReset(newlyChosenOption?: string): void {
    if (newlyChosenOption) {
      this.currentlyChosenOption = newlyChosenOption;
    } else {
      this.roadSignsService.initRoadSignQuestion();
      this.currentlyChosenOption = null;
    }

    this.finalized.set(!this.finalized());
  }

  noWay(): void {
    this._snackBar.open('Спробуй хочаб 😉');
  }
}
