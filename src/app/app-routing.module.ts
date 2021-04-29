import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  LogInShellComponent
} from './modules/authentication/containers/log-in-shell/log-in-shell.component';
import {
  RegistrationShellComponent
} from './modules/authentication/containers/registration-shell/registration-shell.component';
import {
  AuthorizedTemplateComponent
} from './core/authorization/container/authorized-template/authorized-template.component';
import {
  UnauthorizedTemplateComponent
} from './core/authorization/container/unauthorized-template/unauthorized-template.component';

import {
  AuthorizedGuard
} from './core/authorization/guards/authorized.guard';
import {
  UnauthorizedGuard
} from './core/authorization/guards/unauthorized.guard';

const routes: Routes = [{
    path: '',
    component: UnauthorizedTemplateComponent,
    canActivate: [UnauthorizedGuard],
    children: [{
        path: '',
        redirectTo: 'log-in',
        pathMatch: 'full'
      },
      {
        path: 'log-in',
        component: LogInShellComponent
      },
      {
        path: 'registration',
        component: RegistrationShellComponent
      },
    ]
  },
  {
    path: '',
    component: AuthorizedTemplateComponent,
    canActivate: [AuthorizedGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
