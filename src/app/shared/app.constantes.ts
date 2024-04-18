import { Movie } from '@models/movies.model';

export const ApiUrl = '/movies';
export const initialMovies: Movie[] = [];
export const initialMovie: Movie = {
  id: '',
  title: '',
  duration: '',
  budget: '',
  release_date: '',
  box_office: '',
  cinematographers: [],
  poster: '',
  producers: [],
  summary: '',
};
