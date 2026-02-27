import {Component, inject, OnInit} from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {DecimalPipe} from '@angular/common';

import {RoadSignCard} from '../road-sign-card/road-sign-card';
import {RoadSignsService} from '../../services/road-signs-service';
import {LocalStorageService} from '../../services/local-storage-service';
import {CategoryOption, TypeOfSignsID} from '../../interfaces/road-sign';

@Component({
  selector: 'app-road-sign-panel',
  imports: [
    RoadSignCard,
    MatTabGroup,
    MatTab,
    DecimalPipe
  ],
  templateUrl: './road-sign-panel.html',
  styleUrl: './road-sign-panel.scss',
})
export class RoadSignPanel implements OnInit {
  private stationsService = inject(RoadSignsService);
  private localStorage = inject(LocalStorageService);
  readonly currentCategory = this.stationsService.currentCategory;
  private readonly localStorageKey = 'typeOfCategory';

  readonly categoryOptions: CategoryOption[] = [
    { id: '0', name: 'Усі (Free Mode)' },
    { id: '1', name: 'Попереджувальні знаки' },
    { id: '2', name: 'Знаки пріоритету' },
    { id: '3', name: 'Заборонні знаки' },
    { id: '4', name: 'Наказові знаки' },
    { id: '5', name: 'Інформаційно-вказівні знаки' },
    { id: '6', name: 'Знаки сервісу' },
    { id: '7', name: 'Таблички до дорожніх знаків' },
  ];

  ngOnInit(): void {
    this.stationsService.currentCategory.set(this.localStorage.getData(this.localStorageKey));
    this.stationsService.selectMode(this.localStorage.getData(this.localStorageKey));
  }

  public changeMode(typeOfSignsIDNumber: number): void {
    const typeOfSignsID = typeOfSignsIDNumber.toString() as TypeOfSignsID;
    this.stationsService.currentCategory.set(typeOfSignsID);
    this.localStorage.saveData(this.localStorageKey, typeOfSignsID);
    this.stationsService.selectMode(typeOfSignsID);
  }
}
