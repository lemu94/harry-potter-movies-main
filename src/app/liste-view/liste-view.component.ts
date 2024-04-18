import { Component, Input, OnChanges, Signal, inject } from '@angular/core';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { movieTitle, movieRelease, Movie, movieId } from '@models/movies.model';
import { MoviesService } from '@services/movies/movies.service';
import { MillionPipe } from '@pipes/million/million.pipe';
import { DurationPipe } from '@pipes/duration/duration.pipe';

@Component({
  selector: 'app-liste-view',
  standalone: true,
  imports: [CommonModule, MillionPipe, DurationPipe],
  templateUrl: './liste-view.component.html',
  styleUrl: './liste-view.component.css',
})
export class ListeViewComponent implements OnChanges {
  @Input({ required: true }) titleMovie: movieTitle = '';
  @Input({ required: true }) releaseMovie: movieRelease = '';

  protected movieService = inject(MoviesService);
  protected router = inject(Router);

  getMovies: Signal<Movie[]> = this.movieService.getShowMovies();

  constructor() {
    this.movieService.allMovies();
  }
  ngOnChanges(): void {
    this.movieService.filterMovie(this.titleMovie, this.releaseMovie);
  }

  voirPlus(movieId: movieId) {
    this.router.navigate(['/movies', movieId]);
  }
}
