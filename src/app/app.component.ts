import { TitleCasePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@HostListener('window:resize', ['$event'])
export class AppComponent implements OnInit {
  title = 'client-app';
  currentRoute: string = '';
  routeName: string = '';
  showDropdown = false;
  isMobile! : boolean;

  ngOnInit() {
    this.checkScreenSize(); // Check screen size when component is initialized
  }

  

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
    console.log(this.showDropdown)
  }

  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 600; // Adjust the threshold as needed
    console.log('mobile')
    // If the screen size is not mobile, hide the dropdown
    if (!this.isMobile) {
      this.showDropdown = false;
    } 
  }

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

}
