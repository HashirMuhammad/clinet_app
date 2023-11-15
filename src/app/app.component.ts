import { TitleCasePipe } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  HostListener,
  OnChanges,
  OnInit,
} from '@angular/core';
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
  showDropdown = false;
  isMobile!: boolean;

  ngOnInit() {
    this.checkScreenSize(); // Check screen size when component is initialized
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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  home() {
    this.router.navigate(['dashboard']);
  }

  checkScreenSize() {
    const screenWidth = window.innerWidth;
    this.isMobile = screenWidth < 641; // Adjust the threshold as needed

    // If the screen size is not mobile, hide the dropdown
    if (!this.isMobile) {
      this.showDropdown = false;
      console.log('app window');
    } else {
      this.showDropdown = true;
      console.log('app mobile');
      this.isMobile = true;
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
    console.log(this.showDropdown);
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
