import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component';
import { UserFormShellComponent } from './containers/user-form-shell/user-form-shell.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { EditUserFormShellComponent } from './containers/edit-user-form-shell/edit-user-form-shell.component';
import { UserExitDialogComponent } from './components/user-exit-dialog/user-exit-dialog.component';


import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { TabsModule } from '../tabs/tabs.module';




@NgModule({
  declarations: [
    UsersListShellComponent,
    UserFormShellComponent,
    UserFormComponent,
    EditUserFormShellComponent,
    UserExitDialogComponent,
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
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatListModule,
    UsersRoutingModule,
    TabsModule
  ],
  exports:[
    UsersListShellComponent
  ]
})
export class UsersModule { }
