import { Component, OnInit } from '@angular/core';
import {Post} from './post';
import {PostService} from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  postList: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getPostList();
  }

  getPostList(): void {
    this.postService.getPostList()
      .then(postList => this.postList = postList );
  }

}
