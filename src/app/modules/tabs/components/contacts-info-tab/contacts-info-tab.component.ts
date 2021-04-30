import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-info-tab',
  templateUrl: './contacts-info-tab.component.html',
  styleUrls: ['./contacts-info-tab.component.scss']
})
export class ContactsInfoTabComponent implements OnInit {
  
  @Input() paramsData;

  constructor() { }

  ngOnInit(): void {
  }

}
