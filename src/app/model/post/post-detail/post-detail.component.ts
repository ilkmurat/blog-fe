import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../post';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {PostService} from '../post.service';
import {switchMap} from 'rxjs/operators';
import {Comment} from '../comment/comment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post$: Observable<Post>;

  commentList: Comment[];

  constructor(private route: ActivatedRoute,
              private  location: Location,
              private  service: PostService) {
  }

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getPostByPostId(params.get('postId')))
    );

    this.getCommentList();
  }

  getCommentList(): void {
    this.service.getCommentsByPostId(this.route.snapshot.params['postId'])
      .then(commentList => this.commentList = commentList );
  }

  goBack(): void {
    this.location.back();
  }

}
