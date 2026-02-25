import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomValue'
})
export class RandomValuePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): number {
    let result = Math.floor(Math.random() * 371);
    if (result === value) result--;
    return result;
  }

}
