import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  postForm: FormGroup;
  @Input() postData = { post: '' };
  isLoadingResults = false;
  error = '';

  constructor(private router: Router, private api: PostService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      post: ['', Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addPost(form)
      .subscribe(
        result => {
          this.isLoadingResults = false;
          this.router.navigate(['/posts/']);
        },
        error => { // error path
          this.isLoadingResults = false;
          this.error = '';
        }
      );
    this.isLoadingResults = false;
    this.error = 'post yok';
  }

}
