import { Pipe, PipeTransform } from '@angular/core';
import { monneyMovie } from '@models/movies.model';

@Pipe({
  name: 'million',
  standalone: true,
})
export class MillionPipe implements PipeTransform {
  transform(value: monneyMovie): monneyMovie {
    return `$${value} million`;
  }
}
