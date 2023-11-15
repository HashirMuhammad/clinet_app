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
import { AddEmployeeComponent } from './manage_users/add-employee/add-employee.component';
import { UnsubUsersComponent } from './manage_users/unsub-users/unsub-users.component';
import { DataImportComponent } from './manage_users/data-import/data-import.component';
import { HistoryComponent } from './history/history/history.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
import { ClientComponent } from './history/history/client/client.component';
import { EmployeesComponent } from './history/history/employees/employees.component';
import { ArticlesComponent } from './history/history/articles/articles.component';
import { WriteAnArticleComponent } from './manage_arcticles/write-an-article/write-an-article.component';
import { SimpleArticleComponent } from './manage_arcticles/write-an-article/simple-article/simple-article.component';
import { AiArticleComponent } from './manage_arcticles/write-an-article/ai-article/ai-article.component';
import { EditorModule } from '@progress/kendo-angular-editor';
import { LabelModule } from '@progress/kendo-angular-label';
import { ArticlesDetailsComponent } from './manage_arcticles/write-an-article/articles-details/articles-details.component';
import { PreviewArticleComponent } from './manage_arcticles/write-an-article/preview-article/preview-article.component';
import { ConnectionComponent } from './connection/connection.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { LatestComponent } from './social-media/latest/latest.component';
import { PendingComponent } from './social-media/pending/pending.component';
import { PostErrorComponent } from './social-media/post-error/post-error.component';
import { NewPostComponent } from './social-media/new-post/new-post.component';
import { ConfigurationComponent } from './social-media/configuration/configuration.component';
import { ManageArticlesComponent } from './manage_arcticles/write-an-article/manage-articles/manage-articles.component';
import { ViewArticlesComponent } from './manage_arcticles/write-an-article/manage-articles/view-articles/view-articles.component';
import { SearchArticlesComponent } from './manage_arcticles/write-an-article/search-articles/search-articles.component';
import { ProofNewslettersComponent } from './manage_arcticles/write-an-article/proof-newsletters/proof-newsletters.component';

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
    AddEmployeeComponent,
    UnsubUsersComponent,
    DataImportComponent,
    HistoryComponent,
    ClientComponent,
    EmployeesComponent,
    ArticlesComponent,
    WriteAnArticleComponent,
    SimpleArticleComponent,
    AiArticleComponent,
    ArticlesDetailsComponent,
    PreviewArticleComponent,
    ConnectionComponent,
    SocialMediaComponent,
    LatestComponent,
    PendingComponent,
    PostErrorComponent,
    NewPostComponent,
    ConfigurationComponent,
    ManageArticlesComponent,
    ViewArticlesComponent,
    SearchArticlesComponent,
    ProofNewslettersComponent,
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
    ButtonModule,
    DateInputsModule,
    // MatDatepickerModule,
    // MatInputModule,
    // MatNativeDateModule,
    // MatFormFieldModule,
    EditorModule,
    LabelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
