import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInShellComponent } from './containers/log-in-shell/log-in-shell.component';
import { RegistrationShellComponent } from './containers/registration-shell/registration-shell.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';



@NgModule({
  declarations: [
    LogInShellComponent,
    RegistrationShellComponent,
    LogInFormComponent,
    RegistrationFormComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
