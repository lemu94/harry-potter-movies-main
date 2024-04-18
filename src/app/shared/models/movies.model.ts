export interface Movie {
  id: string;
  title: string;
  duration: string;
  budget: string;
  release_date: string;
  box_office?: string;
  cinematographers?: Array<string>;
  poster?: string;
  producers?: Array<string>;
  summary?: string;
}

export type movieId = Movie['id'];
export type movieTitle = Movie['title'];
export type movieRelease = Movie['release_date'];
export type movieDuration = Movie['duration'];
export type movieBudget = Movie['budget'];
export type movieBoxOffice = Movie['box_office'];
export type monneyMovie = movieBudget | movieBoxOffice;
