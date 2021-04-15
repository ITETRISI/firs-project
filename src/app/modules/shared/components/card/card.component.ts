import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  IUser
} from 'src/app/modules/users/services/users/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() user: IUser;
  @Input() hide: boolean;
  @Output() changeActive: EventEmitter < boolean > = new EventEmitter < boolean > ();

  valueCheckbox: boolean;

  constructor() {}

  ngOnInit(): void {}

  activateUser(): void {
    if(this.user.age > 18 && !this.user.active){
      this.changeActive.emit(!this.user.active);
    }
  }

}
