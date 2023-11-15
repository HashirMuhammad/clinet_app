import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  showManageUsersMore = false;
  showManageContentMore = false;
  isMobile!: boolean;
  showDropdown = false;

  ngOnInit() {
    this.checkScreenSize(); // Check screen size when component is initialized
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
    console.log(this.showDropdown);
  }

  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 641; // Adjust the threshold as needed
    // If the screen size is not mobile, hide the dropdown
    if (!this.isMobile) {
      console.log('side mobile');

      this.showDropdown = false;
      this.isMobile = false;
    } else {
      this.showDropdown = false;
      console.log('side window');
      this.isMobile = false;
      this.isMobile = true;
      this.ngOnInit();
    }
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }

  constructor(private route: Router, private elRef: ElementRef) {}

  //manage user button
  showManageUsersButtonList() {
    this.showManageUsersMore = !this.showManageUsersMore;
  }
  //manage content button
  showManageContentButtonList() {
    this.showManageContentMore = !this.showManageContentMore;
  }

  //side bar routes
  routToDash() {
    this.route.navigate(['dashboard']);
    this.showDropdown = false;
  }

  routToSearchClients() {
    this.route.navigate(['manage_users/search_clients']);
    this.showDropdown = false;
  }

  routToAddClient() {
    this.route.navigate(['manage_users/add_client']);
    this.showDropdown = false;
  }

  routToSearchEmp() {
    this.route.navigate(['manage_users/search_emp']);
    this.showDropdown = false;
  }

  routToAddemployee() {
    this.route.navigate(['manage_users/add_emp']);
    this.showDropdown = false;
  }

  routToUnSubUsers() {
    this.route.navigate(['manage_users/unsubcribed_users']);
    this.showDropdown = false;
  }

  routToUDataImport() {
    this.route.navigate(['manage_users/data_import']);
    this.showDropdown = false;
  }

  routToHistory() {
    this.route.navigate(['history']);
    this.showDropdown = false;
  }

  routToWriteAnArticle() {
    this.route.navigate(['manage_content/write_an_article']);
    this.showDropdown = false;
  }
  routToConnection() {
    this.route.navigate(['connection']);
    this.showDropdown = false;
  }
  routToSocial() {
    this.route.navigate(['social_media']);
    this.showDropdown = false;
  }
  routToManageArticle() {
    this.route.navigate(['manage_content/manage_article']);
    this.showDropdown = false;
  }
  routToSearchArticle() {
    this.route.navigate(['manage_content/search_article']);
    this.showDropdown = false;
  }
  routToProofNewsletters() {
    this.route.navigate(['manage_content/proof_newsletters']);
    this.showDropdown = false;
  }
}
