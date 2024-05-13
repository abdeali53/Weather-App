import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToTemperature',
  standalone: true
})
export class KelvinToTemperaturePipe implements PipeTransform {

  transform(value: number, convertTo: "C" | "K" | "F" = "C"): number {
    if (typeof value === 'number' && !isNaN(value)) {
      switch (convertTo) {
        case 'C':
          return Math.round(value - 273);
        case 'K':
          return Math.round(value);
        case 'F':
          return (Math.round(value * 9 / 5) + 32);
        default:
          throw new Error('Invalid conversion type');
      }
    }
    else {
      throw new Error('Invalid input value');
    }
  }

}
