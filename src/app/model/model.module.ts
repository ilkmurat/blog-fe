import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostService} from './post/post.service';
import {PostComponent} from './post/post.component';
import {CategoryListComponent} from './category/category-list.component';
import {CategoryService} from './category/category.service';
import {PostDetailComponent} from './post/post-detail/post-detail.component';
import {RouterModule} from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {UserService} from './user/user.service';
import {AuthenticationService} from './login/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './user/users/users.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { CommentComponent } from './post/comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [PostComponent, CategoryListComponent, PostDetailComponent, AdminPanelComponent, LoginComponent, UsersComponent, UserDetailComponent, UserAddComponent, UserEditComponent, PostAddComponent, PostEditComponent, CommentComponent],
  providers: [PostService, CategoryService, UserService, AuthenticationService],
  exports: [PostComponent, CategoryListComponent, PostDetailComponent, AdminPanelComponent, LoginComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ModelModule {
}
