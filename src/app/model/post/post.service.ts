import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from './post';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Comment} from './comment/comment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
  }
)
export class PostService {
  private baseURL = 'http://localhost:8080/blog/posts/';

  constructor(private http: HttpClient) {
  }

  getPostList(): Promise<Post[]> {
    return this.http.get(this.baseURL)
      .toPromise()
      .then(response => response as Post[])
      .catch(this.handleError);
  }

  getPostByPostId(postId: string): Promise<Post> {
    return this.http.get(this.baseURL + postId)
      .toPromise().then(response => response as Post)
      .catch(this.handleError);
  }

  addPost(post): Observable<any> {
    return this.http.post<any>(this.baseURL, JSON.stringify(post), httpOptions);
  }

  getCommentsByPostId(postId: string): Promise<Comment[]> {
    return this.http.get('http://localhost:8080/blog/comments/' + postId)
      .toPromise().then(response => response as Comment[])
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occurred', error);
    return Promise.reject(error.message || error);
  }

  addComment(comment): Observable<any> {
    return this.http.post<any>('http://localhost:8080/blog/comment/', JSON.stringify(comment), httpOptions);
  }

}
