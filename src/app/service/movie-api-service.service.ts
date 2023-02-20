import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ResponseMovie } from 'src/app/interfaces/responseMovie.interface';
import { MovieVideoResponse } from 'src/app/interfaces/movie-video.interface';
import { MovieDetail } from 'src/app/interfaces/movie-detail.interface';
import { MovieCast } from 'src/app/interfaces/movie-cast.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '08cc33bd5ae3a747598ce2ad84376e66';

  getAllTrendingMoviesByWeek(): Observable<ResponseMovie> {
    return this.http.get<ResponseMovie>(
      `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`
    );
  }

  getTrendingMoviesbtDay(): Observable<ResponseMovie> {
    return this.http.get<ResponseMovie>(
      `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`
    );
  }

  getSearchMovie(movieName: string): Observable<ResponseMovie> {
    return this.http.get<ResponseMovie>(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${movieName}`
    );
  }

  getMovieDetails(id: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  getMovieVideo(id: string): Observable<MovieVideoResponse> {
    return this.http.get<MovieVideoResponse>(
      `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
    );
  }

  getMovieCast(id: string): Observable<MovieCast> {
    return this.http.get<MovieCast>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  // // action
  // fetchActionMovies(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);
  // }

  // // adventure
  // fetchAdventureMovies(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`);
  // }

  // // animation
  // fetchAnimationMovies(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`);
  // }

  // // comedy
  // fetchComedyMovies(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`);
  // }

  // // documentary
  // fetchDocumentaryMovies(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`);
  // }

  // // science-fiction:878

  // fetchScienceFictionMovies(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878`);
  // }

  // // thriller:53
  // fetchThrillerMovies(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`);
  // }
}
