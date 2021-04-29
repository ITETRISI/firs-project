import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts-tab-shell',
  templateUrl: './contacts-info-tab-shell.component.html',
  styleUrls: ['./contacts-info-tab-shell.component.scss']
})
export class ContactsInfoTabShellComponent implements OnInit {

  paramsData;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
   console.log(this.route)
   this.route.queryParams.subscribe(params => {
    this.paramsData = params;
    });
  }
}
