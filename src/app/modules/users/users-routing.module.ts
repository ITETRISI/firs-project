import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  EditUserFormShellComponent
} from './containers/edit-user-form-shell/edit-user-form-shell.component';
import {
  UserFormShellComponent
} from './containers/user-form-shell/user-form-shell.component';
import {
  UsersListShellComponent
} from './containers/users-list-shell/users-list-shell.component';
import {
  ExitEditUserFormGuard
} from './guard/exit-edit-user-form.guard';


const routes: Routes = [{
    path: 'users',
    component: UsersListShellComponent
  },
  {
    path: 'add-user',
    component: UserFormShellComponent
  },
  {
    path: 'edit-user/:id',
    component: EditUserFormShellComponent,
    canDeactivate: [ExitEditUserFormGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ExitEditUserFormGuard]
})
export class UsersRoutingModule {}
