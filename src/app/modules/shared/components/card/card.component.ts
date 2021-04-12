import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() user: IUser;
  @Input() hide: boolean;
  @Output() changeGenderEvent = new EventEmitter<IUser>();


  valueCheckbox: boolean;
  
  constructor() { }

  ngOnInit(): void {

  }

  changeGender(): void {
    this.changeGenderEvent.emit(this.user);
  }

  activateUser(): void{
    this.user.active = !this.user.active;
  }

}