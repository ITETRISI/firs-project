import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListShellComponent } from './modules/users/containers/users-list-shell/users-list-shell.component';

const routes: Routes = [
  { path: 'users', component: UsersListShellComponent },
  { path: '**',   redirectTo: 'users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
