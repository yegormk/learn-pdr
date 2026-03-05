import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

import { AvailableOptions } from '../../interfaces/road-sign';
import { NgClass } from '@angular/common';
import { RoadSignsService } from '../../services/road-signs-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-road-sign-card',
  imports: [MatButton, MatRadioButton, MatRadioGroup, NgClass],
  templateUrl: './road-sign-card.html',
  styleUrl: './road-sign-card.scss',
})
export class RoadSignCard {
  private roadSignsService = inject(RoadSignsService);
  private _snackBar = inject(MatSnackBar);
  readonly currentRoadSign = this.roadSignsService.currentRoadSign;
  readonly currentCategory = this.roadSignsService.currentCategory;
  finalized: WritableSignal<boolean> = signal(false);
  currentlyChosenOption!: string | null;
  currentIndexOfRoadSign!: number;
  lengthOfArrayOfRoadSigns!: number;
  private readonly changeOfCategory = effect(() => {
    this.lengthOfArrayOfRoadSigns = this.roadSignsService.currentCategorySigns().length;
    this.initRoadSignQuestion(false);
  });

  finalizeReset(newlyChosenOption?: string): void {
    if (newlyChosenOption) {
      this.currentlyChosenOption = newlyChosenOption;
    } else {
      if (this.currentIndexOfRoadSign === this.lengthOfArrayOfRoadSigns) {
        this.initRoadSignQuestion(false);
      } else {
        this.initRoadSignQuestion(true);
      }
      this.currentlyChosenOption = null;
    }

    this.finalized.set(!this.finalized());
  }

  // TODO: Refactor this nightmare pls
  initRoadSignQuestion(isTheSameCategory: boolean): void {
    this.currentIndexOfRoadSign = isTheSameCategory ? this.currentIndexOfRoadSign + 1 : 0;

    const currentCategorySigns = [...this.roadSignsService.currentCategorySigns()];

    const indexToUse =
      this.roadSignsService.currentCategory() === '0'
        ? Math.floor(Math.random() * this.lengthOfArrayOfRoadSigns)
        : this.currentIndexOfRoadSign;

    const newCurrentRoadSign = currentCategorySigns[indexToUse];
    currentCategorySigns.splice(indexToUse, 1);

    const randomIndexToPutCorrectAnswer = Math.floor(Math.random() * 3);

    if (newCurrentRoadSign) {
      newCurrentRoadSign.availableOptions = Array.from({ length: 3 }).map(() => {
        const indexOfCurrentIncorrectAnswer = Math.floor(
          Math.random() * currentCategorySigns.length,
        );

        const randomIncorrectAnswer = currentCategorySigns[indexOfCurrentIncorrectAnswer]?.name;

        currentCategorySigns.splice(randomIndexToPutCorrectAnswer, 1);

        return {
          name: randomIncorrectAnswer,
          correct: false,
        };
      }) as AvailableOptions[];

      newCurrentRoadSign.availableOptions[randomIndexToPutCorrectAnswer] = {
        name: newCurrentRoadSign.name,
        correct: true,
      };

      this.currentRoadSign.set(newCurrentRoadSign);
    }
  }

  noWay(): void {
    this._snackBar.open('Спробуй хочаб 😉', '', {
      duration: 1500,
    });
  }
}
