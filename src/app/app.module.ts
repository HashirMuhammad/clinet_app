import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { InfomailerComponent } from './dashboard/infomailer_&_file&sign/infomailer/infomailer.component';
import { FileAndSignComponent } from './dashboard/infomailer_&_file&sign/file-and-sign/file-and-sign.component';
import { InfolearningComponent } from './dashboard/infolearning_&_high_achievers/infolearning/infolearning.component';
import { HighAchieversComponent } from './dashboard/infolearning_&_high_achievers/high-achievers/high-achievers.component';
import { SearchClientsComponent } from './manage_users/search-clients/search-clients.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { AddClientComponent } from './manage_users/add-client/add-client.component';
import { SearchEmployeesComponent } from './manage_users/search-employees/search-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    InfomailerComponent,
    FileAndSignComponent,
    InfolearningComponent,
    HighAchieversComponent,
    SearchClientsComponent,
    AddClientComponent,
    SearchEmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    DropdownModule,
    FormsModule,
    InputsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
