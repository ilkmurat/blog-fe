import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {User} from './user';
import {Observable, of, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { map } from 'rxjs/operators';





const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8080/blog/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data: '';

  customersObservable: Observable<any[]>;

  constructor(private http2: HttpClient ) {
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  /**getAll() {
    return this.http.get<User[]>('/users');
  }*/

  getUsers(): Observable<User[]> {
    return this.http2.get<User[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched Users')),
        catchError(this.handleError('getUsers', []))
      );
  }

  getUser(id: string): Observable<User> {
    const url = 'http://localhost:8080/blog/users/' + id;
    return this.http2.get<User>(url).pipe(
      tap(_ => console.log('fetched User id=${id}')),
      catchError(this.handleError<User>('getUser id=${id}'))
    );
  }


  addUser(user): Observable<any> {
     return this.http2.post<any>(apiUrl, JSON.stringify(user), httpOptions).pipe(tap(res => {
       this.customersObservable = this.http2
         .get<any[]>(apiUrl);
    }));
  }

  updateUser(id, user): Observable<any> {
    const url = apiUrl + '/update/';
    return this.http2.post(url, JSON.stringify(user), httpOptions).pipe(
      tap(_ => console.log('updated User id=${id}')),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(id): Observable<User> {
    const url = apiUrl + '/' + id;

    return this.http2.post<User>(url, httpOptions).pipe(
      tap(_ => console.log('deleted User id=' + id)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
