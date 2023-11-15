import { Component } from '@angular/core';

@Component({
  selector: 'app-file-and-sign',
  templateUrl: './file-and-sign.component.html',
  styleUrls: ['./file-and-sign.component.css'],
})
export class FileAndSignComponent {
  activeButton: number = 1;

  setActive(buttonNumber: number) {
    this.activeButton = buttonNumber;
  }
}
