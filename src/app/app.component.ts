import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client-app';
  currentRoute: string = '';
  routeName: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
        this.routeName = this.currentRoute.replace('/', ''); // Remove the leading /
        this.routeName = this.routeName.replace(/_/g, '&nbsp;'); // Replace all _ with &nbsp;
        this.routeName = this.routeName.replace(
          '/',
          `<img src="../assets/dashboard/route-arrow.png" alt="Image" class="w-3 h-3 mt-1.5 mr-2 ml-2" />`
        );
        this.routeName = this.capitalizeFirstLetter(this.routeName); // Capitalize first letter
      });
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  ngOnInit() {}
}
