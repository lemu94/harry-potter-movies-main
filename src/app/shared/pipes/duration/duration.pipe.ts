import { Pipe, PipeTransform } from '@angular/core';
import { movieDuration } from '@models/movies.model';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(duration: movieDuration): movieDuration {
    let heure = Math.floor(parseInt(duration) / 60);
    let minute = parseInt(duration) % 60;
    return `${heure}h ${minute}min`;
  }
}
