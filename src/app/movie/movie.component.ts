import { Component } from '@angular/core';
import { ListeViewComponent } from '../liste-view/liste-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { movieTitle, movieRelease } from '@models/movies.model';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [ListeViewComponent, ReactiveFormsModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  protected titleMovie: movieTitle = '';
  protected releaseMovie: movieRelease = '';

  onInputTitle(value: movieTitle) {
    this.titleMovie = value;
  }
  onInputYear(value: movieRelease) {
    this.releaseMovie = value;
  }
}
