import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from '../tabs/components/tabs/tabs.component';
import { TabsShellComponent } from '../tabs/containers/tabs-shell/tabs-shell.component';
import { TabsRoutingModule } from './tabs-routing.module';

import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    TabsComponent,
    TabsShellComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    TabsRoutingModule,
  ]
})
export class TabsModule { }
