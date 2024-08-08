import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from '../model/post/post.component';
import {PostDetailComponent} from '../model/post/post-detail/post-detail.component';
import {CategoryListComponent} from '../model/category/category-list.component';
import {AdminPanelComponent} from '../model/admin-panel/admin-panel.component';
import {LoginComponent} from '../model/login/login.component';
import {Log} from '@angular/core/testing/src/logger';
import {AuthGuard} from '../model/login/auth.guard';
import {UsersComponent} from '../model/user/users/users.component';
import {UserDetailComponent} from '../model/user/user-detail/user-detail.component';
import {UserAddComponent} from '../model/user/user-add/user-add.component';
import {UserEditComponent} from '../model/user/user-edit/user-edit.component';
import {PostAddComponent} from '../model/post/post-add/post-add.component';

const routes: Routes = [{
  path: 'posts',
  component: PostComponent
},
  {
    path: 'posts/:postId',
    component: PostDetailComponent
  },
  {
    path: 'post-add',
    component: PostAddComponent
  },
  {
    path: 'category',
    component: CategoryListComponent
  },
  {
    path: 'dashboard',
    component: AdminPanelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    data: {title: 'List of Users'},
    canActivate: [AuthGuard]
  },
  {
    path: 'user-detail/:id',
    component: UserDetailComponent,
    data: {title: 'User Details'}
  },
  {
    path: 'user-add',
    component: UserAddComponent,
    data: {title: 'Add User'}
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent,
    data: {title: 'Edit User'}
  },
  {
    path: '**',
    /**redirectTo: 'posts',*/
    component: CategoryListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
