import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './modules/users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './core/header/header.module';
import { AuthorizedTemplateComponent } from './core/authorization/container/authorized-template/authorized-template.component';
import { UnauthorizedTemplateComponent } from './core/authorization/container/unauthorized-template/unauthorized-template.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizedTemplateComponent,
    UnauthorizedTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    BrowserAnimationsModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
