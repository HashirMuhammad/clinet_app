import { Component } from '@angular/core';

@Component({
  selector: 'app-search-employees',
  templateUrl: './search-employees.component.html',
  styleUrls: ['./search-employees.component.css']
})
export class SearchEmployeesComponent {
  isDropdownOpen:boolean=false;
  isChecked: boolean[] = [false,false,false,false,false,false,false,false,false,false];
  EMPLOYEE_DATA = [
    { employeeId: 1, surname: 'Doe', firstName: 'John', emailAddress: 'john.doe@abc.com', selected: false  },
    { employeeId: 2, surname: 'Smith', firstName: 'Jane',  emailAddress: 'jane.smith@xyz.com', selected: false  },
    { employeeId: 3, surname: 'Doe', firstName: 'John', emailAddress: 'john.doe@abc.com', selected: false  },
    { employeeId: 4, surname: 'Smith', firstName: 'Jane',  emailAddress: 'jane.smith@xyz.com', selected: false  },
    { employeeId: 5, surname: 'Doe', firstName: 'John', emailAddress: 'john.doe@abc.com', selected: false  },
    { employeeId: 6, surname: 'Smith', firstName: 'Jane',  emailAddress: 'jane.smith@xyz.com', selected: false  },
    
    // Add more employee data as needed
  ];
  selectAll = false;
  colors = ['#9c27b0', '#FF8095', '#3399FF', '#29CCB1'];
  panel = false;

  

  //table select all---------------------------------------------------------------------------------------------
  toggleSelectAll() {
    this.EMPLOYEE_DATA.forEach(employee => {
      employee.selected = this.selectAll;
    });
  }


  handleButtonClick() {
    // Add your button click logic here
    this.panel = !this.panel;
  }
  

  toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index,":",this.isChecked[index]);
  }

  //table button panel option---------------------------------------------------------------------------------------------
  togglePanelVisibility() {
    this.panel = !this.panel; // Toggle the panel visibility flag
  }
  
  handleEditClick(employee: any) {
    // Implement your logic for handling the "Edit" button click
  }
  
  handleHistoryClick(employee: any) {
    // Implement your logic for handling the "History" button click
  }
  
  handleDataUsageClick(employee: any) {
    // Implement your logic for handling the "Data Usage" button click
  }
  
  handleSendPasswordClick(employee: any) {
    // Implement your logic for handling the "Send Password" button click
  }
  
  handleSendUsernameClick(employee: any) {
    // Implement your logic for handling the "Send Username" button click
  }
  
  handleDeleteClick(employee: any) {
    // Implement your logic for handling the "Delete" button click
  }
  

  //avatar color----------------------------------------------------------------------------------------------------
  avaColoe() {
    const colors = ['#9c27b0', '#FF8095', '#3399FF', '#29CCB1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }
}
