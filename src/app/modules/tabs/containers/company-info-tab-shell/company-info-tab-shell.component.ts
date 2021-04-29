import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-info-tab',
  templateUrl: './company-info-tab-shell.component.html',
  styleUrls: ['./company-info-tab-shell.component.scss']
})
export class CompanyInfoTabShellComponent implements OnInit {

  paramsData;
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
   console.log(this.route)
   this.route.queryParams.subscribe(params => {
    this.paramsData = params;
    });
  }

}
