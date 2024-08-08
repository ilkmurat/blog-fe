import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userForm: FormGroup;
  _id = '';
  username = '';
  name = '';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
    this.userForm = this.formBuilder.group({
      username : [null, Validators.required],
      name : [null, Validators.required]
    });
  }

  getUser(id) {
    this.api.getUser(id).subscribe(data => {
      this._id = data.user_id;
      this.userForm.setValue({
        username: data.username,
        name: data.name
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateUser(this._id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/user-detail', this._id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  userDetails() {
    this.router.navigate(['/users']);
  }

}
