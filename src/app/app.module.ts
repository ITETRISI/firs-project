import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleFirstModule } from './modules/module-first/module-first.module';
import { ModuleSecondModule } from './modules/module-second/module-second.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleThirdModule } from './modules/module-third/module-third.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleFirstModule,
    ModuleSecondModule,
    ModuleThirdModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
