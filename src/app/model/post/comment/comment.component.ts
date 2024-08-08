import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentForm: FormGroup;
  @Input() commentData = {comment: ''};

  constructor(private router: Router, private api: PostService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required],
      postId: this.route.snapshot.params['postId']
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.addComment(form)
      .subscribe(
        result => {
          this.router.navigate(['/posts/' + this.commentForm.get('postId').value.toString()]);
          window.location.reload();
        },
        error => {
        }
      );
  }

}
