import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { LogInShellComponent } from './containers/log-in-shell/log-in-shell.component';
import { RegistrationShellComponent } from './containers/registration-shell/registration-shell.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PasswordsComponent } from './components/passwords/passwords.component';

@NgModule({
  declarations: [
    LogInShellComponent,
    RegistrationShellComponent,
    LogInFormComponent,
    RegistrationFormComponent,
    PasswordsComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
