import {
  Component
} from '@angular/core';
import {
  NavigationEnd,
  Router
} from '@angular/router';
import {
  filter
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor( private router: Router ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd)
        console.log(event.url);
    })
  }

}
