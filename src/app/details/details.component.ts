import { Component, OnInit, Signal, inject } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { movieId, Movie } from '@models/movies.model';
import { DurationPipe } from '@pipes/duration/duration.pipe';
import { MillionPipe } from '@pipes/million/million.pipe';
import { MoviesService } from '@services/movies/movies.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, DurationPipe, MillionPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  protected movieService = inject(MoviesService);
  protected movieRoute = inject(ActivatedRoute);
  protected router = inject(Router);
  movieId: movieId = '';
  movieIndex: number = 0;
  readonly oneMovie: Signal<Movie> = this.movieService.getOneMovie();

  ngOnInit(): void {
    this.movieId = this.movieRoute.snapshot.paramMap.get('movieId') as movieId;
    this.movieIndex = this.movieService.verifMovie(this.movieId);

    if (this.movieIndex === -1) {
      this.navigateToMovies();
    } else {
      this.refreshMovie(this.movieId);
    }
  }
  navigateToMovies(): void {
    this.router.navigate(['/movies']);
  }

  refreshMovie(movieId: movieId) {
    this.movieService.getMovie(movieId);
  }
}
