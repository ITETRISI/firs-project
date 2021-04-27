import {
  Injectable
} from '@angular/core';
import {
  MatDialog
} from '@angular/material/dialog';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import {
  UserExitDialogComponent
} from '../components/user-exit-dialog/user-exit-dialog.component';
import { IUser } from '../services/users/users.service';
import {
  EditUserFormShellComponent
} from '../containers/edit-user-form-shell/edit-user-form-shell.component';

@Injectable({
  providedIn: 'root'
})
export class ExitEditUserFormGuard implements CanDeactivate < EditUserFormShellComponent > {

  constructor(public dialog: MatDialog) {}

  canDeactivate(
    component: EditUserFormShellComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable < boolean > | Promise < boolean > | boolean {
  
    const difference = this.findDifference( component.user, component.userForm.value);
    if(!difference.length){
      return true;
    }

    const dialogRef = this.dialog.open(UserExitDialogComponent, {
      width: '550px',
      data: {
        difference: difference,
      }
    });

    return dialogRef.afterClosed()
  }

  findDifference(userValue: IUser, formValue: IUser): Array<string>{
    let difference : Array<string> = [];
    for(let key in formValue){
      if(userValue[key] !== formValue[key]){
        difference.push(key)
      }
    }
    return difference
  }
}
