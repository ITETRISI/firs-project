import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormShellComponent } from './containers/user-form-shell/user-form-shell.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';



@NgModule({
  declarations: [
    UserFormShellComponent,
    AddUserFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserFormModule { }
