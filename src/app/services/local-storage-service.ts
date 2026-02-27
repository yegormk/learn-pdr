import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /** Local storage property */
  private locStorage: Storage = localStorage;

  /**
   * Save data into local storage with ability to specify the key
   *
   * @param key
   *
   * @param value
   */
  saveData<T>(key: string, value: T): void {
    this.locStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Retrieve data from local storage
   *
   * @param key
   */
  getData<T>(key: string): T {
    return JSON.parse(<string>this.locStorage.getItem(key)) as T;
  }

  /**
   * Remove data from local storage with specific key
   *
   * @param key
   */
  removeData(key: string): void {
    this.locStorage.removeItem(key);
  }

  /**
   * Remove data from whole local storage
   */
  clearData(): void {
    this.locStorage.clear();
  }
}
