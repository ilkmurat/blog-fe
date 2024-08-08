import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Promise<User> {
    return this.http.get(this.baseUrl + '/blog/user/authenticate/' + username + '/' + password)
      .toPromise().then(response => {
        if (response) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(response));
        }
      }
        )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Login olunuz', error);
    return Promise.reject(error.message || error);
  }

 /** login(username: string, password: string) {
    return this.http.post<any>(this.baseUrl + '/blog/user/authenticate/' + username + '/' + password, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }*/

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
