import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { JoinPipe } from './pipes/join.pipe';
import { BirthYearPipe } from './pipes/birth-year.pipe';

@NgModule({
  declarations: [
    CardComponent,
    JoinPipe,
    BirthYearPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule
  ],
  exports:[
    CardComponent
  ]
})
export class SharedModule { }
