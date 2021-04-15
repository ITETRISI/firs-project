import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormShellComponent } from './containers/user-form-shell/user-form-shell.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserFormShellComponent,
    AddUserFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
})
export class UserFormModule { }
