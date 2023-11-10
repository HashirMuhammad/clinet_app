import { Component } from '@angular/core';
import { ServiceManageUserService } from '../manage_users/service-manage-user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent {
  isDropdownOpen:boolean=false;
  isChecked: boolean[] = [false,false,false,false,false,false,false,false,false,false];
  CONNECTION_DATA = [
  { connectionId: 1, exclude: '?????', imgUrl: '', fullname: 'Doe', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 2, exclude: '?????', imgUrl: '', fullname: 'Smith', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 3, exclude: '?????', imgUrl: '', fullname: 'Johnson', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 4, exclude: '?????', imgUrl: '', fullname: 'Brown', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 5, exclude: '?????', imgUrl: '', fullname: 'Taylor', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 6, exclude: '?????', imgUrl: '', fullname: 'Williams', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 7, exclude: '?????', imgUrl: '', fullname: 'Lee', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 8, exclude: '?????', imgUrl: '', fullname: 'Anderson', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 9, exclude: '?????', imgUrl: '', fullname: 'Harris', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 10, exclude: '?????', imgUrl: '', fullname: 'Clark', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 11, exclude: '?????', imgUrl: '', fullname: 'Martin', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 12, exclude: '?????', imgUrl: '', fullname: 'Young', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 13, exclude: '?????', imgUrl: '', fullname: 'Garcia', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 14, exclude: '?????', imgUrl: '', fullname: 'Rodriguez', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false },
  { connectionId: 15, exclude: '?????', imgUrl: '', fullname: 'Jackson', title: 'Long title Goes', published_date: '22/12/2022', platform: 'Facebook', selected: false }
    // Add more connection data as needed
  ];
  selectAll = false;
  colors = ['#9c27b0', '#FF8095', '#3399FF', '#29CCB1'];
  panel = false;
  add_filter = true;
  panelid= 0;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = this.CONNECTION_DATA.length;
  // for sorting 
  ascendingOrder = true;
  sortingColumn = 'connectionId';
  ascendingOrderFullName = true;
  sortingColumnFullName = 'fullname';
  ascendingOrdertitle = true;
  sortingColumntitle = 'title';
  ascendingOrderCompanyName = true;
  sortingColumnCompanyName = 'companyName';



  constructor(
    private mangerUserService:  ServiceManageUserService,
    ){}

    

    // sorting for id-------------------------------------------------------------------------------------------------
    toggleIdSorting() {
      this.ascendingOrder = !this.ascendingOrder;
      this.sortingColumn = 'connectionId';
      this.CONNECTION_DATA = this.sortData([...this.paginatedData]);
    }
    
    sortData(data : any) {
      return data.sort((a : any, b : any) => {
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
      this.CONNECTION_DATA = this.sortDataName([...this.paginatedData]);
    }
    
    sortDataName(data : any) {
      return data.sort((a : any, b : any) => {
        const nameA = a[this.sortingColumnFullName].toLowerCase();
        const nameB = b[this.sortingColumnFullName].toLowerCase();
    
        if (this.ascendingOrderFullName) {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });
    }
    // sorting for title-------------------------------------------------------------------------------------------------
    toggletitleSorting() {
      this.ascendingOrdertitle = !this.ascendingOrdertitle;
      this.sortingColumntitle = 'title';
      this.CONNECTION_DATA = this.sortDatatitle([...this.paginatedData]);
    }

    sortDatatitle(data : any) {
      return data.sort((a : any, b : any) => {
        const nameA = a[this.sortingColumntitle].toLowerCase();
        const nameB = b[this.sortingColumntitle].toLowerCase();
    
        if (this.ascendingOrdertitle) {
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
      this.CONNECTION_DATA = this.sortDataCompany([...this.paginatedData]);
    }

    sortDataCompany(data : any) {
      return data.sort((a : any, b : any) => {
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
  return this.CONNECTION_DATA.slice(startIndex, endIndex);
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
  

  
  //table select all---------------------------------------------------------------------------------------------
  toggleSelectAll() {
    this.CONNECTION_DATA.forEach(connection => {
      connection.selected = this.selectAll;
    });
  }


  

  toggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index,":",this.isChecked[index]);
  }

  //table button panel option---------------------------------------------------------------------------------------------
  togglePanelVisibility(connectionId :any) {
    this.panel = !this.panel; // Toggle the panel visibility flag
    this.panelid = connectionId;
     
  }
  
  handleEditClick(connectionId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(connectionId);
    this.panel = false;
  }
  
  handleHistoryClick(connectionId: any) {
    console.log(connectionId);
    this.panel = false;

    // Implement your logic for handling the "History" button click
  }
  
  handleDataUsageClick(connectionId: any) {
    console.log(connectionId);
    this.panel = false;

    // Implement your logic for handling the "Data Usage" button click
  }
  
  handleSendPasswordClick(connectionId: any) {
    console.log(connectionId);
    this.panel = false;

    // Implement your logic for handling the "Send Password" button click
  }
  
  handleSendUsernameClick(connectionId: any) {
    console.log(connectionId);
    this.panel = false;

    // Implement your logic for handling the "Send Username" button click
  }
  
  handleDeleteClick(connectionId: any) {
    console.log(connectionId);
    this.panel = false;

    // Implement your logic for handling the "Delete" button click
  }
  

  //avatar color----------------------------------------------------------------------------------------------------
  avaColorservice(letter: string) {
    try {
        const result =  this.mangerUserService.avaColoe(letter); // Call the function and wait for the result
        return result; // Handle the result here
    } catch (error) {
        console.error('Error in avaColorService:', error);
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}
}
