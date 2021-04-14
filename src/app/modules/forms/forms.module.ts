import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsShellComponent } from './containers/forms-shell/forms-shell.component';



@NgModule({
  declarations: [
    FormsShellComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormsShellComponent
  ]
})
export class FormsModule { }
