import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;
  @Input() userData = { username: '', name: '' };
  isLoadingResults = false;
  error = '';

  constructor(private router: Router, private api: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addUser(form)
      .subscribe(
        result => {
          this.isLoadingResults = false;
          this.router.navigate(['/users/']);
        },
        error => { // error path
          this.isLoadingResults = false;
          this.error = '';
        }
      );
    this.isLoadingResults = false;
    this.error = 'kirik yok';
  }

}
