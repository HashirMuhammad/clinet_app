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
import { AddEmployeeComponent } from './manage_users/add-employee/add-employee.component';
import { UnsubUsersComponent } from './manage_users/unsub-users/unsub-users.component';
import { DataImportComponent } from './manage_users/data-import/data-import.component';
import { HistoryComponent } from './history/history/history.component';
import { ClientComponent } from './history/history/client/client.component';
import { EmployeesComponent } from './history/history/employees/employees.component';
import { ArticlesComponent } from './history/history/articles/articles.component';
import { WriteAnArticleComponent } from './manage_arcticles/write-an-article/write-an-article.component';
import { ArticlesDetailsComponent } from './manage_arcticles/write-an-article/articles-details/articles-details.component';
import { ConnectionComponent } from './connection/connection.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { NewPostComponent } from './social-media/new-post/new-post.component';
import { ConfigurationComponent } from './social-media/configuration/configuration.component';
import { ManageArticlesComponent } from './manage_arcticles/write-an-article/manage-articles/manage-articles.component';
import { ViewArticlesComponent } from './manage_arcticles/write-an-article/manage-articles/view-articles/view-articles.component';
import { SearchArticlesComponent } from './manage_arcticles/write-an-article/search-articles/search-articles.component';
import { ProofNewslettersComponent } from './manage_arcticles/write-an-article/proof-newsletters/proof-newsletters.component';

const routes: Routes = [
  {
    path: 'sidebar',
    component: SidebarComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'infomailer', component: InfomailerComponent },
      { path: 'file_and_sign', component: FileAndSignComponent },
      { path: 'infolearner', component: InfolearningComponent },
      { path: 'high_achievers', component: HighAchieversComponent },
    ],
  },
  {
    path: 'manage_users',
    children: [
      { path: 'search_clients', component: SearchClientsComponent },
      { path: 'add_client', component: AddClientComponent, },
      { path: 'search_emp', component: SearchEmployeesComponent, },
      {  path: 'add_emp', component: AddEmployeeComponent, },
      { path: 'unsubcribed_users', component: UnsubUsersComponent, },
      { path: 'data_import', component: DataImportComponent, },
    ],
  },
  {
    path: 'manage_content',
    children: [
      { path: 'write_an_article', component: WriteAnArticleComponent },
      { path: 'article_details', component: ArticlesDetailsComponent },
      { path: 'manage_article', component: ManageArticlesComponent },
      { path: 'view_article/:id', component: ViewArticlesComponent },
      { path: 'search_article', component: SearchArticlesComponent },
      { path: 'proof_newsletters', component: ProofNewslettersComponent },
    ],
  },
  {
    path: 'history',
    component: HistoryComponent,
    children: [
      { path: 'client', component: ClientComponent, },
      { path: 'employees', component: EmployeesComponent, },
      { path: 'articles', component: ArticlesComponent, },
    ],
  },
  {
    path: 'connection',
    component: ConnectionComponent,
  },
  {
    path: 'social_media',
    component: SocialMediaComponent,
  },
  { 
    path: 'manage_articles/new_post', 
    component: NewPostComponent, 
  },
  { 
    path: 'social_media/configuration', 
    component: ConfigurationComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
