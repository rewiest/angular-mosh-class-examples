
import { BadInputError } from '../common/bad-input-error';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) {
  }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true}))
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
    // --- if wanting to replace the entire post, use http put method as below ---
    // return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource))
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInputError(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }
}
