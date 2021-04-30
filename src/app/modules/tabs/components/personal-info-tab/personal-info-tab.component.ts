import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info-tab',
  templateUrl: './personal-info-tab.component.html',
  styleUrls: ['./personal-info-tab.component.scss']
})
export class PersonalInfoTabComponent implements OnInit {

  @Input() paramsData;

  constructor() { }

  ngOnInit(): void {
  }

}
