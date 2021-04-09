import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component';


@NgModule({
  declarations: [
    UsersListShellComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    UsersListShellComponent
  ]
})
export class UsersModule { }
