import { Component } from '@angular/core';
import { ServiceManageUserService } from 'src/app/manage_users/service-manage-user.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
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
  CLIENT_DATA = [
    {
      clientId: 1,
      imgUrl: '',
      fullname: 'Doe',
      email: 'john.doe@abc.com',
      companyName: 'ABC Inc.',
      selected: false,
    },
    {
      clientId: 2,
      imgUrl: '',
      fullname: 'Smith',
      email: 'smith.jane@xyz.com',
      companyName: 'XYZ Corporation',
      selected: false,
    },
    {
      clientId: 3,
      imgUrl: '',
      fullname: 'Johnson',
      email: 'joe.johnson@def.com',
      companyName: 'DEF Enterprises',
      selected: false,
    },
    {
      clientId: 4,
      imgUrl: '',
      fullname: 'Brown',
      email: 'susan.brown@ghi.com',
      companyName: 'GHI Ltd.',
      selected: false,
    },
    {
      clientId: 5,
      imgUrl: '',
      fullname: 'Taylor',
      email: 'mike.taylor@jkl.com',
      companyName: 'JKL Co.',
      selected: false,
    },
    {
      clientId: 6,
      imgUrl: '',
      fullname: 'Williams',
      email: 'lisa.williams@mno.com',
      companyName: 'MNO Group',
      selected: false,
    },
    {
      clientId: 7,
      imgUrl: '',
      fullname: 'Lee',
      email: 'amy.lee@pqr.com',
      companyName: 'PQR Industries',
      selected: false,
    },
    {
      clientId: 8,
      imgUrl: '',
      fullname: 'Anderson',
      email: 'robert.anderson@rst.com',
      companyName: 'RST Ltd.',
      selected: false,
    },
    {
      clientId: 9,
      imgUrl: '',
      fullname: 'Harris',
      email: 'emily.harris@uvw.com',
      companyName: 'UVW Corporation',
      selected: false,
    },
    {
      clientId: 10,
      imgUrl: '',
      fullname: 'Clark',
      email: 'david.clark@xyz.com',
      companyName: 'XYZ Corporation',
      selected: false,
    },
    {
      clientId: 11,
      imgUrl: '',
      fullname: 'Martin',
      email: 'sarah.martin@def.com',
      companyName: 'DEF Enterprises',
      selected: false,
    },
    {
      clientId: 12,
      imgUrl: '',
      fullname: 'Young',
      email: 'jason.young@ghi.com',
      companyName: 'GHI Ltd.',
      selected: false,
    },
    {
      clientId: 13,
      imgUrl: '',
      fullname: 'Garcia',
      email: 'linda.garcia@jkl.com',
      companyName: 'JKL Co.',
      selected: false,
    },
    {
      clientId: 14,
      imgUrl: '',
      fullname: 'Rodriguez',
      email: 'paul.rodriguez@mno.com',
      companyName: 'MNO Group',
      selected: false,
    },
    {
      clientId: 15,
      imgUrl: '',
      fullname: 'Jackson',
      email: 'jessica.jackson@pqr.com',
      companyName: 'PQR Industries',
      selected: false,
    },
    // Add more client data as needed
  ];
  selectAll = false;
  colors = ['#9c27b0', '#FF8095', '#3399FF', '#29CCB1'];
  panel = false;
  add_filter = true;
  panelid = 0;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = this.CLIENT_DATA.length;
  // for sorting
  ascendingOrder = true;
  sortingColumn = 'clientId';
  ascendingOrderFullName = true;
  sortingColumnFullName = 'fullname';
  ascendingOrderEmail = true;
  sortingColumnEmail = 'email';
  ascendingOrderCompanyName = true;
  sortingColumnCompanyName = 'companyName';

  constructor(private mangerUserService: ServiceManageUserService) {}

  // sorting for id-------------------------------------------------------------------------------------------------
  toggleIdSorting() {
    this.ascendingOrder = !this.ascendingOrder;
    this.sortingColumn = 'clientId';
    this.CLIENT_DATA = this.sortData([...this.paginatedData]);
  }

  sortData(data: any) {
    return data.sort((a: any, b: any) => {
      if (this.ascendingOrder) {
        return a[this.sortingColumn] - b[this.sortingColumn];
      } else {
        return b[this.sortingColumn] - a[this.sortingColumn];
      }
    });
  }
  // sorting for name-------------------------------------------------------------------------------------------------
  toggleFullNameSorting() {
    this.ascendingOrderFullName = !this.ascendingOrderFullName;
    this.sortingColumnFullName = 'fullname';
    this.CLIENT_DATA = this.sortDataName([...this.paginatedData]);
  }

  sortDataName(data: any) {
    return data.sort((a: any, b: any) => {
      const nameA = a[this.sortingColumnFullName].toLowerCase();
      const nameB = b[this.sortingColumnFullName].toLowerCase();

      if (this.ascendingOrderFullName) {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  }
  // sorting for email-------------------------------------------------------------------------------------------------
  toggleEmailSorting() {
    this.ascendingOrderEmail = !this.ascendingOrderEmail;
    this.sortingColumnEmail = 'email';
    this.CLIENT_DATA = this.sortDataEmail([...this.paginatedData]);
  }

  sortDataEmail(data: any) {
    return data.sort((a: any, b: any) => {
      const nameA = a[this.sortingColumnEmail].toLowerCase();
      const nameB = b[this.sortingColumnEmail].toLowerCase();

      if (this.ascendingOrderEmail) {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  }
  // sorting for company-------------------------------------------------------------------------------------------------
  toggleCompanyNameSorting() {
    this.ascendingOrderCompanyName = !this.ascendingOrderCompanyName;
    this.sortingColumnCompanyName = 'companyName';
    this.CLIENT_DATA = this.sortDataCompany([...this.paginatedData]);
  }

  sortDataCompany(data: any) {
    return data.sort((a: any, b: any) => {
      const nameA = a[this.sortingColumnCompanyName].toLowerCase();
      const nameB = b[this.sortingColumnCompanyName].toLowerCase();

      if (this.ascendingOrderCompanyName) {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  }

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
    this.CLIENT_DATA.forEach((client) => {
      client.selected = this.selectAll;
    });
  }

  handleButtonClick() {
    // Add your button click logic here
    this.panel = !this.panel;
  }

  toggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index, ':', this.isChecked[index]);
  }

  //table button panel option---------------------------------------------------------------------------------------------
  togglePanelVisibility(clientId: any) {
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
