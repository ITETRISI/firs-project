import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserFormShellComponent } from './modules/users/containers/edit-user-form-shell/edit-user-form-shell.component';
import { ExitEditUserFormGuard } from './modules/users/containers/edit-user-form-shell/exit-edit-user-form.guard';
import { UserFormShellComponent } from './modules/users/containers/user-form-shell/user-form-shell.component';
import { UsersListShellComponent } from './modules/users/containers/users-list-shell/users-list-shell.component';

const routes: Routes = [
  { path: 'users', component: UsersListShellComponent },
  { path: 'add-user', component: UserFormShellComponent },
  { path: 'edit-user/:id', component: EditUserFormShellComponent, canDeactivate: [ExitEditUserFormGuard] },
  { path: '**',   redirectTo: 'users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ExitEditUserFormGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
