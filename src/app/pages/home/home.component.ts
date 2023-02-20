import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private movieService: MovieApiServiceService) {}

  movies: Movie[] = [];
  active: boolean = false;

  trendingMovies: Movie[] = [];

  ngOnInit(): void {
    this.allTrendingMoviesByWeek();
    this.trendingMoviesByDay();
  }

  allTrendingMoviesByWeek() {
    this.movieService
      .getAllTrendingMoviesByWeek()
      .subscribe((data) => (this.movies = data.results));
  }

  trendingMoviesByDay() {
    this.movieService
      .getTrendingMoviesbtDay()
      .subscribe((data) => (this.trendingMovies = data.results));
  }
}
