import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private movieService: MovieApiServiceService,
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({
      name: 'description',
      content: 'search here movies like avatar,war etc',
    });
  }

  movies: Movie[] = [];
  searchForm = new FormGroup({
    movieName: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  clearText() {
    this.searchForm.reset();
  }

  submitForm() {
    if (this.searchForm.value.movieName) {
      this.movieService
        .getSearchMovie(this.searchForm.value.movieName)
        .subscribe((result) => {
          this.movies = result.results;
          this.clearText();
        });
    }
  }
}
