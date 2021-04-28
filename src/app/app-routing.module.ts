import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  LogInShellComponent
} from './modules/authentication/containers/log-in-shell/log-in-shell.component';
import {
  RegistrationShellComponent
} from './modules/authentication/containers/registration-shell/registration-shell.component';
import {
  EditUserFormShellComponent
} from './modules/users/containers/edit-user-form-shell/edit-user-form-shell.component';
import {
  ExitEditUserFormGuard
} from './modules/users/guard/exit-edit-user-form.guard';
import {
  UserFormShellComponent
} from './modules/users/containers/user-form-shell/user-form-shell.component';
import {
  UsersListShellComponent
} from './modules/users/containers/users-list-shell/users-list-shell.component';
import {
  AuthenticationGuard
} from './modules/authentication/guard/authentication.guard';
import {
  AuthorizedTemplateComponent
} from './core/authorization/container/authorized-template/authorized-template.component';
import {
  UnauthorizedTemplateComponent
} from './core/authorization/container/unauthorized-template/unauthorized-template.component';

import { AuthorizedGuard } from './core/authorization/guards/authorized.guard';
import { UnauthorizedGuard } from './core/authorization/guards/unauthorized.guard';

// const routes: Routes = [
//   { path: 'users', component: UsersListShellComponent, canActivate: [AuthenticationGuard] },
//   { path: 'add-user', component: UserFormShellComponent, canActivate: [AuthenticationGuard] },
//   { path: 'edit-user/:id', component: EditUserFormShellComponent, canDeactivate: [ExitEditUserFormGuard], canActivate: [AuthenticationGuard] },
//   { path: 'log-in', component: LogInShellComponent },
//   { path: 'registration', component: RegistrationShellComponent },
//   { path: '**',   redirectTo: 'users', pathMatch: 'full' },
// ];

const routes: Routes = [
  {
    path: '',
    component: UnauthorizedTemplateComponent,
    canActivate: [UnauthorizedGuard],
    children: [
      {path: '', redirectTo: 'log-in', pathMatch: 'full'},
      {
        path: 'log-in',
        component: LogInShellComponent
      },
      {
        path: 'registration',
        component: RegistrationShellComponent
      },
    ]
  },
  {
    path: '',
    component: AuthorizedTemplateComponent,
    canActivate: [AuthorizedGuard],
    children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
      path: 'users',
      component: UsersListShellComponent
    },
    
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ExitEditUserFormGuard, AuthenticationGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {}
