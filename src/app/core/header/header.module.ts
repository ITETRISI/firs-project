import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { AuthenticationModule } from '../../modules/authentication/authentication.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    AuthenticationModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
