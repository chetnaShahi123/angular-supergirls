import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo1'
})
export class Demo1Pipe implements PipeTransform {

  transform(value: number): number {
    return Math.floor(value);    //A numeric value representing the largest integer that is less than or equal to val.
  }

}
