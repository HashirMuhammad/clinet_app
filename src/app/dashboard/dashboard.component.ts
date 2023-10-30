import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  subcribers: number  = 68;
  employees: number  = 28;
  clients: number  = 40;
  printNewsletter: number  = 21;
  emailNewsletter: number  = 9;
  unsub: number  = 1;

}
