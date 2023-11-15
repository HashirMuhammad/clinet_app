import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
})
export class ConfigurationComponent {
  date = '22/01/2023';
  showDiv: boolean = false;
  records = [
    {
      avatar: '../../../assets/history/Avatar.png',
      label: 'Label1',
      isChecked: false,
    },
    {
      avatar: '../../../assets/history/Avatar.png',
      label: 'Label2',
      isChecked: true,
    },
    {
      avatar: '../../../assets/history/Avatar.png',
      label: 'Label3',
      isChecked: false,
    },
  ];

  toggleSwitch(index: number): void {
    this.records[index].isChecked = !this.records[index].isChecked;
  }

  toggleAdditionalDiv() {
    this.showDiv = !this.showDiv;
  }
}
