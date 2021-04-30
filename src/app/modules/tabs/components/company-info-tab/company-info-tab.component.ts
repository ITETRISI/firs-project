import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-info-tab',
  templateUrl: './company-info-tab.component.html',
  styleUrls: ['./company-info-tab.component.scss']
})
export class CompanyInfoTabComponent implements OnInit {

  @Input() paramsData;

  constructor() { }

  ngOnInit(): void {
  }

}
