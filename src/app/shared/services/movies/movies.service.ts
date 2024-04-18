import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { ApiUrl, initialMovie, initialMovies } from '../../app.constantes';
import { catchError, throwError } from 'rxjs';
import { Movie, movieTitle, movieRelease, movieId } from '@models/movies.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private showMovies = signal<Movie[]>(initialMovies);
  private oneMovie = signal<Movie>(initialMovie);
  private saveMovie: Movie[] = [];

  constructor(private http: HttpClient) {}

  getShowMovies(): Signal<Movie[]> {
    return this.showMovies.asReadonly();
  }
  getOneMovie(): Signal<Movie> {
    return this.oneMovie.asReadonly();
  }

  allMovies() {
    this.showMovies.set(initialMovies);
    this.http
      .get<Movie[]>(ApiUrl)
      .pipe(catchError((err) => throwError(() => err)))
      .subscribe((data) => {
        this.saveMovie = data;
        this.showMovies.set(data);
      });
  }
  getMovie(movieId: movieId) {
    const api = `${ApiUrl}/${movieId}`;
    this.oneMovie.set(initialMovie);
    this.http
      .get<Movie>(api)
      .pipe(catchError((error) => throwError(() => error)))
      .subscribe((data) => this.oneMovie.set(data));
  }

  verifMovie(movieId: movieId): number {
    return this.saveMovie.findIndex((v) => v.id == movieId);
  }

  filterMovie(titleSearch: movieTitle = '', releaseSearch: movieRelease = '') {
    const movies = this.saveMovie;
    releaseSearch = releaseSearch ?? '';
    let filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titleSearch.toLowerCase()) &&
        movie.release_date.includes(releaseSearch)
    );
    this.showMovies.set(filteredMovies);
  }
}
