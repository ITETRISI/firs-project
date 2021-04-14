import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsShellComponent } from './modules/forms/containers/forms-shell/forms-shell.component';
import { UsersListShellComponent } from './modules/users/containers/users-list-shell/users-list-shell.component';

const routes: Routes = [
  { path: 'users', component: UsersListShellComponent },
  { path: 'add-user', component: FormsShellComponent  },
  { path: '**',   redirectTo: 'users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
