import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    FirstComponent
  ]
})
export class ModuleFirstModule { }
