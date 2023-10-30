import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfomailerComponent } from './dashboard/infomailer_&_file&sign/infomailer/infomailer.component';
import { FileAndSignComponent } from './dashboard/infomailer_&_file&sign/file-and-sign/file-and-sign.component';
import { InfolearningComponent } from './dashboard/infolearning_&_high_achievers/infolearning/infolearning.component';
import { HighAchieversComponent } from './dashboard/infolearning_&_high_achievers/high-achievers/high-achievers.component';
import { SearchClientsComponent } from './manage_users/search-clients/search-clients.component';
import { AddClientComponent } from './manage_users/add-client/add-client.component';
import { SearchEmployeesComponent } from './manage_users/search-employees/search-employees.component';

const routes: Routes = [
  {
    path: "sidebar",
    component: SidebarComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: 'infomailer', component: InfomailerComponent },
      { path: 'file_and_sign', component: FileAndSignComponent},
      { path: 'infolearner', component: InfolearningComponent},
      { path: 'high_achievers', component: HighAchieversComponent},
    ]
  },
  {
      path: "search_clients",
      component: SearchClientsComponent
  },
  {
    path: "add_client",
    component: AddClientComponent
  },
  {
    path: "search_emp",
    component: SearchEmployeesComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
