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
    { clientId: 2, surname: 'Cmith', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    { clientId: 3, surname: 'Zoe', firstName: 'John', companyName: 'ABC Inc.', emailAddress: 'john.doe@abc.com', selected: false  },
    { clientId: 4, surname: 'Nit', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    { clientId: 5, surname: 'Michal', firstName: 'John', companyName: 'ABC Inc.', emailAddress: 'john.doe@abc.com', selected: false  },
    { clientId: 6, surname: 'Smith', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    { clientId: 7, surname: 'Doe', firstName: 'John', companyName: 'ABC Inc.', emailAddress: 'john.doe@abc.com', selected: false  },
    { clientId: 8, surname: 'Smith', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    { clientId: 9, surname: 'Voe', firstName: 'John', companyName: 'ABC Inc.', emailAddress: 'john.doe@abc.com', selected: false  },
    { clientId: 10, surname: 'Smith', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    { clientId: 11, surname: 'Ioe', firstName: 'John', companyName: 'ABC Inc.', emailAddress: 'john.doe@abc.com', selected: false  },
    { clientId: 12, surname: 'Smith', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    { clientId: 13, surname: 'Doe', firstName: 'John', companyName: 'ABC Inc.', emailAddress: 'john.doe@abc.com', selected: false  },
    { clientId: 14, surname: 'Cmith', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    { clientId: 15, surname: 'Michal', firstName: 'John', companyName: 'ABC Inc.', emailAddress: 'john.doe@abc.com', selected: false  },
    { clientId: 16, surname: 'Smith', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    { clientId: 17, surname: 'Doe', firstName: 'John', companyName: 'ABC Inc.', emailAddress: 'john.doe@abc.com', selected: false  },
    { clientId: 18, surname: 'Smith', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    { clientId: 19, surname: 'Voe', firstName: 'John', companyName: 'ABC Inc.', emailAddress: 'john.doe@abc.com', selected: false  },
    { clientId: 20, surname: 'Smith', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    { clientId: 21, surname: 'Ioe', firstName: 'John', companyName: 'ABC Inc.', emailAddress: 'john.doe@abc.com', selected: false  },
    { clientId: 22, surname: 'Smith', firstName: 'Jane', companyName: 'XYZ Corp.', emailAddress: 'jane.smith@xyz.com', selected: false  },
    
    // Add more client data as needed
  ];
  selectAll = false;
  colors = ['#9c27b0', '#FF8095', '#3399FF', '#29CCB1'];
  panel = false;
  add_filter = true;
  panelid= 0;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = this.CLIENT_DATA.length;


  // table pagination methods------------------------------------------------------------------------------------------------
  get paginatedData() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.CLIENT_DATA.slice(startIndex, endIndex);
}

get totalPages(): number {
  return Math.ceil(this.totalItems / this.itemsPerPage);
}

getPages(): number[] {
  const startPage = Math.max(1, this.currentPage - 2);
  const endPage = Math.min(this.totalPages, startPage + 3);
  return Array.from({ length: (endPage - startPage + 1) }, (_, i) => i + startPage);
}

jumpToPage(): void {
  if (this.currentPage >= 1 && this.currentPage <= this.totalPages) {
    // Optional: Add any additional logic before jumping to the page
    // For example, fetching data for the new page

    // Jump to the specified page
    this.currentPage = Number(this.currentPage);
  } else {
    // Handle invalid page number (outside of valid range)
    alert('Invalid page number!');
  }
}

calculateMaxValue(): number {
  return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
}

// ---------------------------------------------------------------------------------------------------  
  

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
  togglePanelVisibility(clientId :any) {
    this.panel = !this.panel; // Toggle the panel visibility flag
    this.panelid = clientId;
     
  }
  
  handleEditClick(clientId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(clientId);
    this.panel = false;
  }
  
  handleHistoryClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "History" button click
  }
  
  handleDataUsageClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Data Usage" button click
  }
  
  handleSendPasswordClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Password" button click
  }
  
  handleSendUsernameClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Username" button click
  }
  
  handleDeleteClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Delete" button click
  }
  

  //avatar color----------------------------------------------------------------------------------------------------
  avaColoe(letter: string) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const colors = [
        '#FF5733', '#FFBD33', '#FFD133', '#FFE033', '#F1FF33',
        '#C1FF33', '#91FF33', '#61FF33', '#33FF36', '#33FF66',
        '#33FF96', '#33FFC6', '#33FFF6', '#33D9FF', '#33A9FF',
        '#3379FF', '#3349FF', '#6B33FF', '#9B33FF', '#CB33FF',
        '#FA33FF', '#FF33E6', '#FF33B6', '#FF339F', '#FF3376'
    ];

    const index = alphabet.indexOf(letter.toUpperCase());
    if (index !== -1) {
        return colors[index % colors.length];
    }

    return '#CCCCCC'; // Default color if letter is not found
  }
  
}
