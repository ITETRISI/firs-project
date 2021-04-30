import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from '../tabs/components/tabs/tabs.component';
import { TabsShellComponent } from '../tabs/containers/tabs-shell/tabs-shell.component';
import { TabsRoutingModule } from './tabs-routing.module';

import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';

import { CompanyInfoTabShellComponent } from './containers/company-info-tab-shell/company-info-tab-shell.component';
import { ContactsInfoTabShellComponent } from './containers/contacts-info-tab-shell/contacts-info-tab-shell.component';
import { PersonalInfoTabShellComponent } from './containers/personal-info-tab-shell/personal-info-tab-shell.component';
import { CompanyInfoTabComponent } from './components/company-info-tab/company-info-tab.component';
import { ContactsInfoTabComponent } from './components/contacts-info-tab/contacts-info-tab.component';
import { PersonalInfoTabComponent } from './components/personal-info-tab/personal-info-tab.component';


@NgModule({
  declarations: [
    TabsComponent,
    TabsShellComponent,
    CompanyInfoTabComponent,
    ContactsInfoTabComponent,
    PersonalInfoTabComponent,
    CompanyInfoTabShellComponent,
    ContactsInfoTabShellComponent,
    PersonalInfoTabShellComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    TabsRoutingModule,
  ]
})
export class TabsModule { }
