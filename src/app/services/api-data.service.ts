import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface apiDataShape {
  results: any
}

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  basURL = environment.basURL
  api_key = environment.api_key
  requestParams = new HttpParams().append('api_key', this.api_key)

  constructor(private http: HttpClient) { }

  handleHttpErrors(error: HttpErrorResponse) {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }

  getMovie(movieId: number) {
    return this.http.get<apiDataShape>(this.basURL + '/movie/' + movieId, {
      params: this.requestParams
    }).pipe(catchError(this.handleHttpErrors))
  }

  getPopular() {
    return this.http.get(`${this.basURL}/movie/popular`, {
      params: this.requestParams
    }).pipe(catchError(this.handleHttpErrors))
  }

  getTopRated() {
    return this.http.get(`${this.basURL}/movie/top_rated`, {
      params: this.requestParams
    }).pipe(catchError(this.handleHttpErrors))
  }

  searchMovie(searchText: string) {
    return this.http.get(`${this.basURL}/search/movie`,
      {
        params: this.requestParams.append('query', searchText)
      },

    )
      // .pip(map(response: any => response.results.slice(0, limit))
      
      .pipe(catchError(this.handleHttpErrors))
  }




}
