import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { SearchComponent } from 'src/app/pages/search/search.component';
import { MovieDetailsComponent } from 'src/app/pages/movie-details/movie-details.component';

import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [MovieApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
