import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../../users/services/users/users.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() userData$: Observable<IUser>;
  userData: IUser

  constructor() { }

  ngOnInit(): void {
    this.userData$.subscribe(result => {
      this.userData = result;
    });
  }

}
