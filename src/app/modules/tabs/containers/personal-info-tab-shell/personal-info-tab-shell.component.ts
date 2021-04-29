import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info-tab-shell.component.html',
  styleUrls: ['./personal-info-tab-shell.component.scss']
})
export class PersonalInfoTabShellComponent implements OnInit {

  paramsData;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
   console.log(this.route)
   this.route.queryParams.subscribe(params => {
    this.paramsData = params;
    });
  }

}
