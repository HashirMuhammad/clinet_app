import { Component, EventEmitter, Output } from '@angular/core';
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
  isMobile! : boolean;
  showDropdown =false;

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
  
  constructor(private route: Router) {}

  
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
}

routToSearchClients() {
  this.route.navigate(['manage_users/search_clients']);
}

routToAddClient() {
  this.route.navigate(['manage_users/add_client']);
}

routToSearchEmp() {
  this.route.navigate(['manage_users/search_emp']);
}

routToAddemployee(){
  this.route.navigate(['manage_users/add_emp']);
}

routToUnSubUsers(){
  this.route.navigate(['manage_users/unsubcribed_users']);
}

routToUDataImport(){
  this.route.navigate(['manage_users/data_import']);
}

routToHistory(){
  this.route.navigate(['history']);
}

routToWriteAnArticle(){
  this.route.navigate(['manage_content/write_an_article']);
}
}

