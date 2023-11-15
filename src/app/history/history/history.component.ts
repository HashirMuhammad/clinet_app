import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
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
  clientTable = true;
  empTable = false;
  arcticleTable = false;
  filters = true;

  toggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index, ':', this.isChecked[index]);
  }

  clientTableToogle() {
    this.clientTable = !this.clientTable;
    this.empTable = false;
    this.arcticleTable = false;
    this.filters = true;
  }

  empToogle() {
    this.empTable = !this.empTable;
    this.clientTable = false;
    this.arcticleTable = false;
    this.filters = true;
  }

  arcticleToogle() {
    this.arcticleTable = !this.arcticleTable;
    this.empTable = false;
    this.clientTable = false;
    this.filters = !this.filters;
  }

  filterToogle() {
    this.filters = !this.filters;
  }
}
