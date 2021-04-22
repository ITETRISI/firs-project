import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
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

  @Input() userData:Observable<IUser>;
  @Output() onSubmitEvent = new EventEmitter < FormGroup > ();

  emailPattern: string = "^[a-z0-9._%+-]+@gmail.com";
  user: IUser;
  userForm: FormGroup = new FormGroup({
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
    ]),
  });

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    if(this.userData){
      this.userData.subscribe(user => {
        this.userForm.patchValue(user)
        this.userForm.get('email')?.setAsyncValidators(this.usersService.checkEmail(user.id))
      }); 
    } else {
      this.userForm.get('email')?.setAsyncValidators(this.usersService.checkEmail())
    }
    
  }

  onSubmit() {
    if(this.userForm.valid){
      this.onSubmitEvent.emit(this.userForm);
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
