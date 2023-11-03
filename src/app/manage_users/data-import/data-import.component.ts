import { Component } from '@angular/core';

@Component({
  selector: 'app-data-import',
  templateUrl: './data-import.component.html',
  styleUrls: ['./data-import.component.css']
})
export class DataImportComponent {
  isDropdownOpen:boolean=false;
  isChecked: boolean[] = [false,false,false,false,false,false,false,false,false,false];
  USER_DATA = [
    { userId: 1,  dateAdded:'2/11/2023', type:'', share:'no', rows:'2', mode:'Add new Data Only', from:'CSV', status:'pending', selected: false  },
    { userId: 2, dateAdded:'2/11/2023', type:'client',  share:'no', rows:'3', mode:'', from:'CSV', status:'pending', selected: false  },
    { userId: 3, dateAdded:'2/11/2023', type:'', share:'no', rows:'0', mode:'Add new Data Only', from:'CSV', status:'pending', selected: false  },
    { userId: 4, dateAdded:'2/11/2023', type:'client',  share:'no', rows:'1', mode:'Add new Data Only', from:'CSV', status:'completed', selected: false  },
    { userId: 5,  dateAdded:'2/11/2023', type:'', share:'no', rows:'5', mode:'Add new Data Only', from:'CSV', status:'completed', selected: false  },
    { userId: 6,  dateAdded:'2/11/2023', type:'client',  share:'no', rows:'1', mode:'Add new Data Only', from:'CSV', status:'completed', selected: false  },
    { userId: 7, dateAdded:'2/11/2023', type:'', share:'no', rows:'1', mode:'Add new Data Only', from:'CSV', status:'ananlyse data', selected: false  },
    { userId: 8, dateAdded:'2/11/2023', type:'client',  share:'no', rows:'8', mode:'Add new Data Only', from:'CSV', status:'ananlyse data', selected: false  },
    { userId: 9, dateAdded:'2/11/2023', type:'', share:'no', rows:'1', mode:'Add new Data Only', from:'CSV', status:'pending', selected: false  },
    { userId: 10, dateAdded:'2/11/2023', type:'client',  share:'no', rows:'4', mode:'Add new Data Only', from:'CSV', status:'completed', selected: false  },
    { userId: 11, dateAdded:'2/11/2023', type:'', share:'no', rows:'8', mode:'', from:'CSV', status:'completed', selected: false  },
    { userId: 12, dateAdded:'2/11/2023', type:'client',  share:'no', rows:'1', mode:'', from:'CSV', status:'completed', selected: false  },
    { userId: 13, dateAdded:'2/11/2023', type:'', share:'no', rows:'6', mode:'Add new Data Only', from:'CSV', status:'ananlyse data', selected: false  },
    { userId: 14, dateAdded:'2/11/2023', type:'client',  share:'no', rows:'1', mode:'Add new Data Only', from:'CSV', status:'pending', selected: false  },
    { userId: 15, dateAdded:'2/11/2023', type:'', share:'no', rows:'4', mode:'Add new Data Only', from:'CSV', status:'completed', selected: false  },
    { userId: 16, dateAdded:'2/11/2023', type:'client',  share:'no', rows:'1', mode:'', from:'CSV', status:'completed', selected: false  },
    { userId: 17, dateAdded:'2/11/2023', type:'', share:'no', rows:'9', mode:'Add new Data Only', from:'CSV', status:'completed', selected: false  },
    { userId: 18, dateAdded:'2/11/2023', type:'client',  share:'no', rows:'7', mode:'Add new Data Only', from:'CSV', status:'ananlyse data', selected: false  },
    { userId: 19, dateAdded:'2/11/2023', type:'', share:'no', rows:'1', mode:'Add new Data Only', from:'CSV', status:'ananlyse data', selected: false  },
    { userId: 20, dateAdded:'2/11/2023', type:'client',  share:'no', rows:'7', mode:'Add new Data Only', from:'CSV', status:'pending', selected: false  },
    { userId: 21, dateAdded:'2/11/2023', type:'', share:'no', rows:'1', mode:'Add new Data Only', from:'CSV', status:'pending', selected: false  },
    { userId: 22, dateAdded:'2/11/2023', type:'client',  share:'no', rows:'1', mode:'Add new Data Only', from:'CSV', status:'completed', selected: false  },
    
    // Add more client data as needed
  ];
  selectAll = false;
  colors = ['#9c27b0', '#FF8095', '#3399FF', '#29CCB1'];
  panel = false;
  add_filter = false;
  panelid= 0;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = this.USER_DATA.length;

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
    this.USER_DATA.forEach(user => {
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
    console.log(index,":",this.isChecked[index]);
  }

  //table button panel option---------------------------------------------------------------------------------------------
  togglePanelVisibility(userId :any) {
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
  
  
}
