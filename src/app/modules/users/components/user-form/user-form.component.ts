import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AsyncValidatorFn
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import {
  IUser, IValidationError, UsersService
} from 'src/app/modules/users/services/users/users.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output() onSubmitEvent = new EventEmitter < IUser > ();
  constructor(private _snackBar: MatSnackBar, private usersService: UsersService) {}

  emailPattern: string = "^[a-z0-9._%+-]+@gmail.com"

  userForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.required,
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(15),
      Validators.max(30)
    ]),
    company: new FormControl('', [
      Validators.required,
      Validators.maxLength(35)
    ]),
    department: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    file: new FormControl(''),
    gender: new FormControl('male', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern)
    ],
    // this.usersService.checkEmail(this.userForm.controls['email'].value) as AsyncValidatorFn
    
    ),
  });

  ngOnInit(): void {}

  onSubmit() {
    if(this.userForm.valid){
      this._snackBar.open('User created', 'Close', {
        duration: 2000,
      });
      this.onSubmitEvent.emit(this.userForm.value);
    }
  }

  onFileChange(event: any) {
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      console.log(file.name)
        this.userForm.patchValue({
          file: file.name
       });
    }
  }

}
