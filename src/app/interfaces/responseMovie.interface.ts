import { Movie } from 'src/app/interfaces/movie.interface';

export interface ResponseMovie {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
