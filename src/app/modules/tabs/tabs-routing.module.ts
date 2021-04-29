import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { CompanyInfoTabShellComponent } from './containers/company-info-tab-shell/company-info-tab-shell.component';
import { ContactsInfoTabShellComponent } from './containers/contacts-info-tab-shell/contacts-info-tab-shell.component';
import { PersonalInfoTabShellComponent } from './containers/personal-info-tab-shell/personal-info-tab-shell.component';
import { TabsShellComponent } from './containers/tabs-shell/tabs-shell.component';



const routes: Routes = [
  {
    path: '',
    component: TabsShellComponent, 
    children: [
      {
        path: 'company-info',
        component: CompanyInfoTabShellComponent, 
      },
      {
        path: 'personal-info',
        component: PersonalInfoTabShellComponent, 
      },
      {
        path: 'contacts-info',
        component: ContactsInfoTabShellComponent, 
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TabsRoutingModule {}
