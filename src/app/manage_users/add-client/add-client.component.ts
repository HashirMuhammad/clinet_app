import { Component } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent {
  // personal information inputs
  cliendIdInput!: string;
  titleInput!: string;
  firstnameInput!: string;
  surnameInput!: string;
  customGreetingInput!: string;
  emailInput!: string;
  genderInput: string = '';
  // address inputs
  address1Input!: string;
  address2Input!: string;
  address3Input!: string;
  address4Input!: string;
  cityInput!: string;
  countryInput!: string;
  postCodeInput!: string;
  usernameInput!: string;
  standardprofileInput: string = 'standardProfile';
  customerProfileInput: string = '';
  registerOnlineInput!: string;
  tagsInput!: string;
  //Profiling inputs
  accountManagerInput: string = '';
  CompanyInput!: string;
  SICCodeInput!: string;
  emailNewsletterInput!: string;
  printedNewsletterInput!: string;

  cancel() {
    this.cliendIdInput = '';
    this.titleInput = '';
    this.firstnameInput = '';
    this.surnameInput = '';
    this.customGreetingInput = '';
    this.emailInput = '';
    this.genderInput = '';
    this.address1Input = '';
    this.address2Input = '';
    this.address3Input = '';
    this.address4Input = '';
    this.cityInput = '';
    this.countryInput = '';
    this.postCodeInput = '';
    this.usernameInput = '';
    this.standardprofileInput = 'standardProfile';
    this.customerProfileInput = '';
    this.registerOnlineInput = '';
    this.tagsInput = '';
    this.accountManagerInput = '';
    this.CompanyInput = '';
    this.SICCodeInput = '';
    this.emailNewsletterInput = '';
    this.printedNewsletterInput = '';
  }
}
