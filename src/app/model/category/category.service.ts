import {Injectable} from '@angular/core';
import {Category} from './category';

import {HttpClient} from '@angular/common/http';


@Injectable()
export class CategoryService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.baseUrl + '/blog/categories/')
      .toPromise()
      .then(response => response as Category[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occurred', error);
    return Promise.reject(error.message || error);
  }
}
