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

import { Observable } from 'rxjs';
import {
  IUser, UsersService
} from 'src/app/modules/users/services/users/users.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output() onSubmitEvent = new EventEmitter < IUser > ();
  constructor(private usersService: UsersService) {}

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
    this.usersService.checkEmail()),
  });

  ngOnInit(): void {
    console.log(this.userForm.get('email'))
  }

  onSubmit() {
    if(this.userForm.valid){
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
