import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { MovieDetail } from 'src/app/interfaces/movie-detail.interface';
import { MovieVideo } from 'src/app/interfaces/movie-video.interface';
import { MovieCast } from '../../interfaces/movie-cast.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  movieDetailResult!: MovieDetail;
  movieVideoResult!: MovieVideo;
  movieCastResult!: MovieCast;

  ngOnInit(): void {
    const getParamId: string | null = this.router.snapshot.paramMap.get('id');
    if (!getParamId) return;
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id: string) {
    this.service.getMovieDetails(id).subscribe((result) => {
      this.movieDetailResult = result;
    });
  }

  getVideo(id: string) {
    this.service.getMovieVideo(id).subscribe((result) => {
      const video: MovieVideo | undefined = result.results.find(
        (video: MovieVideo) => video.type == 'Trailer'
      );
      if (!video) return;
      this.movieVideoResult = video;
    });
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      this.movieCastResult = result;
    });
  }
}
