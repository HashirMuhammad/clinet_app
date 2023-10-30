import { Component } from '@angular/core';
import { PopupComponent } from '@progress/kendo-angular-popup';
import { ButtonModule } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-search-clients',
  templateUrl: './search-clients.component.html',
  styleUrls: ['./search-clients.component.css']
})
export class SearchClientsComponent {
  isDropdownOpen:boolean=false;
  isChecked: boolean[] = [false,false,false,false,false,false,false,false,false,false];
  CLIENT_DATA = [
    { clientId: 1, surname: 'Doe', firstName: 'John', companyName: 'ABC Inc.', emailAddress: 'john.doe@abc.com', selected: false  },
    { clientId: 2, surname: 'Smith', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    { clientId: 3, surname: 'Doe', firstName: 'John', companyName: 'ABC Inc.', emailAddress: 'john.doe@abc.com', selected: false  },
    { clientId: 4, surname: 'Smith', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    { clientId: 5, surname: 'Doe', firstName: 'John', companyName: 'ABC Inc.', emailAddress: 'john.doe@abc.com', selected: false  },
    { clientId: 6, surname: 'Smith', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    
    // Add more client data as needed
  ];
  selectAll = false;
  colors = ['#9c27b0', '#FF8095', '#3399FF', '#29CCB1'];
  panel = false;
  add_filter = false;

  

  //add filter
  addFilter(){
    this.add_filter = !this.add_filter;
  }
  //table select all---------------------------------------------------------------------------------------------
  toggleSelectAll() {
    this.CLIENT_DATA.forEach(client => {
      client.selected = this.selectAll;
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
  
  handleEditClick(client: any) {
    // Implement your logic for handling the "Edit" button click
  }
  
  handleHistoryClick(client: any) {
    // Implement your logic for handling the "History" button click
  }
  
  handleDataUsageClick(client: any) {
    // Implement your logic for handling the "Data Usage" button click
  }
  
  handleSendPasswordClick(client: any) {
    // Implement your logic for handling the "Send Password" button click
  }
  
  handleSendUsernameClick(client: any) {
    // Implement your logic for handling the "Send Username" button click
  }
  
  handleDeleteClick(client: any) {
    // Implement your logic for handling the "Delete" button click
  }
  

  //avatar color----------------------------------------------------------------------------------------------------
  avaColoe() {
    const colors = ['#9c27b0', '#FF8095', '#3399FF', '#29CCB1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }
  
}
