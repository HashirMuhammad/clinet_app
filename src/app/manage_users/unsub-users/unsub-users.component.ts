import { Component } from '@angular/core';
import { ServiceManageUserService } from '../service-manage-user.service';

@Component({
  selector: 'app-unsub-users',
  templateUrl: './unsub-users.component.html',
  styleUrls: ['./unsub-users.component.css'],
})
export class UnsubUsersComponent {
  isDropdownOpen: boolean = false;
  isChecked: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  USER_DATA = [
    {
      userId: 1,
      surname: 'Doe',
      dateAdded: '2/11/2023',
      emailAddress: 'john.doe@abc.com',
      selected: false,
    },
    {
      userId: 2,
      surname: 'Cmith',
      dateAdded: '2/11/2023',
      companyName: 'XYZ Corp.',
      emailAddress: 'jane.smith@xyz.com',
      selected: false,
    },
    {
      userId: 3,
      surname: 'Zoe',
      dateAdded: '2/11/2023',
      emailAddress: 'john.doe@abc.com',
      selected: false,
    },
    {
      userId: 4,
      surname: 'Nit',
      dateAdded: '2/11/2023',
      companyName: 'XYZ Corp.',
      emailAddress: 'jane.smith@xyz.com',
      selected: false,
    },
    {
      userId: 5,
      surname: 'Michal',
      dateAdded: '2/11/2023',
      emailAddress: 'john.doe@abc.com',
      selected: false,
    },
    {
      userId: 6,
      surname: 'Smith',
      dateAdded: '2/11/2023',
      companyName: 'XYZ Corp.',
      emailAddress: 'jane.smith@xyz.com',
      selected: false,
    },
    {
      userId: 7,
      surname: 'Doe',
      dateAdded: '2/11/2023',
      emailAddress: 'john.doe@abc.com',
      selected: false,
    },
    {
      userId: 8,
      surname: 'Smith',
      dateAdded: '2/11/2023',
      companyName: 'XYZ Corp.',
      emailAddress: 'jane.smith@xyz.com',
      selected: false,
    },
    {
      userId: 9,
      surname: 'Voe',
      dateAdded: '2/11/2023',
      emailAddress: 'john.doe@abc.com',
      selected: false,
    },
    {
      userId: 10,
      surname: 'Smith',
      dateAdded: '2/11/2023',
      companyName: 'XYZ Corp.',
      emailAddress: 'jane.smith@xyz.com',
      selected: false,
    },
    {
      userId: 11,
      surname: 'Ioe',
      dateAdded: '2/11/2023',
      emailAddress: 'john.doe@abc.com',
      selected: false,
    },
    {
      userId: 12,
      surname: 'Smith',
      dateAdded: '2/11/2023',
      companyName: 'XYZ Corp.',
      emailAddress: 'jane.smith@xyz.com',
      selected: false,
    },
    {
      userId: 13,
      surname: 'Doe',
      dateAdded: '2/11/2023',
      emailAddress: 'john.doe@abc.com',
      selected: false,
    },
    {
      userId: 14,
      surname: 'Cmith',
      dateAdded: '2/11/2023',
      companyName: 'XYZ Corp.',
      emailAddress: 'jane.smith@xyz.com',
      selected: false,
    },
    {
      userId: 15,
      surname: 'Michal',
      dateAdded: '2/11/2023',
      emailAddress: 'john.doe@abc.com',
      selected: false,
    },
    {
      userId: 16,
      surname: 'Smith',
      dateAdded: '2/11/2023',
      companyName: 'XYZ Corp.',
      emailAddress: 'jane.smith@xyz.com',
      selected: false,
    },
    {
      userId: 17,
      surname: 'Doe',
      dateAdded: '2/11/2023',
      emailAddress: 'john.doe@abc.com',
      selected: false,
    },
    {
      userId: 18,
      surname: 'Smith',
      dateAdded: '2/11/2023',
      companyName: 'XYZ Corp.',
      emailAddress: 'jane.smith@xyz.com',
      selected: false,
    },
    {
      userId: 19,
      surname: 'Voe',
      dateAdded: '2/11/2023',
      emailAddress: 'john.doe@abc.com',
      selected: false,
    },
    {
      userId: 20,
      surname: 'Smith',
      dateAdded: '2/11/2023',
      companyName: 'XYZ Corp.',
      emailAddress: 'jane.smith@xyz.com',
      selected: false,
    },
    {
      userId: 21,
      surname: 'Ioe',
      dateAdded: '2/11/2023',
      emailAddress: 'john.doe@abc.com',
      selected: false,
    },
    {
      userId: 22,
      surname: 'Smith',
      dateAdded: '2/11/2023',
      companyName: 'XYZ Corp.',
      emailAddress: 'jane.smith@xyz.com',
      selected: false,
    },

    // Add more client data as needed
  ];
  selectAll = false;
  colors = ['#9c27b0', '#FF8095', '#3399FF', '#29CCB1'];
  panel = false;
  add_filter = false;
  panelid = 0;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = this.USER_DATA.length;
  selectedOption: string = ''; // Initialize with an appropriate default value
  enteredValue: string = ''; // Initialize with an appropriate default value

  constructor(private mangerUserService: ServiceManageUserService) {}

  clear() {
    this.selectedOption = '';
    this.enteredValue = '';
  }

  // table pagination methods------------------------------------------------------------------------------------------------
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.USER_DATA.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  getPages(): number[] {
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.totalPages, startPage + 3);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => i + startPage
    );
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
  addFilter() {
    this.add_filter = !this.add_filter;
  }
  //table select all---------------------------------------------------------------------------------------------
  toggleSelectAll() {
    this.USER_DATA.forEach((user) => {
      user.selected = this.selectAll;
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
    console.log(index, ':', this.isChecked[index]);
  }

  //table button panel option---------------------------------------------------------------------------------------------
  togglePanelVisibility(userId: any) {
    this.panel = !this.panel; // Toggle the panel visibility flag
    this.panelid = userId;
  }

  handleEditClick(userId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(userId);
    this.panel = false;
  }

  handleHistoryClick(userId: any) {
    console.log(userId);
    this.panel = false;

    // Implement your logic for handling the "History" button click
  }

  handleDataUsageClick(userId: any) {
    console.log(userId);
    this.panel = false;

    // Implement your logic for handling the "Data Usage" button click
  }

  handleSendPasswordClick(userId: any) {
    console.log(userId);
    this.panel = false;

    // Implement your logic for handling the "Send Password" button click
  }

  handleSendUsernameClick(userId: any) {
    console.log(userId);
    this.panel = false;

    // Implement your logic for handling the "Send Username" button click
  }

  handleDeleteClick(userId: any) {
    console.log(userId);
    this.panel = false;

    // Implement your logic for handling the "Delete" button click
  }

  //avatar color----------------------------------------------------------------------------------------------------
  avaColorservice(letter: string) {
    try {
      const result = this.mangerUserService.avaColoe(letter); // Call the function and wait for the result
      return result; // Handle the result here
    } catch (error) {
      console.error('Error in avaColorService:', error);
      throw error; // Rethrow the error to handle it elsewhere if needed
    }
  }
}
