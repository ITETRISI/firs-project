import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { IUser } from 'src/app/modules/users/services/users/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() user: IUser;
  @Input() hide: boolean;


  valueCheckbox: boolean;
  
  constructor() { }

  ngOnInit(): void {

  }

  activateUser(): void{
    this.user.active = !this.user.active;
  }

}