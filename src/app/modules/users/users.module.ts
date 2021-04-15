import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component';
import { SharedModule } from '../shared/shared.module';
import { UserFormModule } from '../user-form/user-form.module';


@NgModule({
  declarations: [
    UsersListShellComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    SharedModule
  ],
  exports:[
    UsersListShellComponent
  ]
})
export class UsersModule { }
