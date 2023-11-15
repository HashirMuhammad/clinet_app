import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  // personal information inputs
  employeeIdInput!: string;
  titleInput!: string;
  firstnameInput!: string;
  surnameInput!: string;
  customGreetingInput!: string;
  emailInput!: string;
  genderInput: string = '';
  //Profiling inputs
  userNameInput: string = '';
  qualificationInput!: string;
  permissionInput!: string;
  emailNewsletterInput!: string;
  printedNewsletterInput!: string;
  standardprofileInput!: string;
  tagsInput!: string;

  cancel() {
    this.employeeIdInput = '';
    this.titleInput = '';
    this.firstnameInput = '';
    this.surnameInput = '';
    this.customGreetingInput = '';
    this.emailInput = '';
    this.genderInput = '';
    this.userNameInput = '';
    this.qualificationInput = '';
    this.permissionInput = '';
    this.emailNewsletterInput = '';
    this.printedNewsletterInput = '';
    this.standardprofileInput = '';
    this.tagsInput = '';
  }
}
