import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component';
import { UserFormShellComponent } from './containers/user-form-shell/user-form-shell.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms'
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';


@NgModule({
  declarations: [
    UsersListShellComponent,
    UserFormShellComponent,
    AddUserFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    SharedModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    UsersListShellComponent
  ]
})
export class UsersModule { }
