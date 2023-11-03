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

  constructor(private route: Router) {}

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

  //manage user button
  showManageUsersButtonList() {
    this.showManageUsersMore = !this.showManageUsersMore;
  }
  //manage content button
  showManageContentButtonList() {
    this.showManageContentMore = !this.showManageContentMore;
  }
}
