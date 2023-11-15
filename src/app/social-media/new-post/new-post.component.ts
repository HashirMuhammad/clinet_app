import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent {
  public valuedate: Date = new Date();
  public valuetime: Date = new Date();
  selectedOption: string = 'schedule';
  file: File | null = null;
  fileUrl: string | null = null;
  uploading = false;
  titleInput!: string;
  descriptionInput!: string;
  linkInput!: string;
  hashtagInput!: string;
  categoryInput: string = '';
  linkedinSwitch = false;
  fbSwitch = false;
  instaSwitch = false;

  setActive(buttonNumber: string) {
    this.selectedOption = buttonNumber;
  }

  discard() {
    this.titleInput = '';
    this.descriptionInput = '';
    this.linkInput = '';
    this.hashtagInput = '';
    this.categoryInput = '';
    this.valuedate = new Date();
    this.valuetime = new Date();
    this.file = null;
    this.fileUrl = '';
    this.linkedinSwitch = false;
    this.fbSwitch = false;
    this.instaSwitch = false;
  }

  // for image uploading
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Check file type
      const allowedTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
      ];
      if (allowedTypes.includes(file.type)) {
        // Check file size
        const maxSize = 3 * 1024 * 1024; // 3MB
        if (file.size <= maxSize) {
          this.file = file;
          this.fileUrl = URL.createObjectURL(file);
          this.uploadFile(); // Automatically start the upload when dropped
        } else {
          alert('File size exceeds 3MB. Please select a smaller file.');
        }
      } else {
        alert(
          'Invalid file type. Please select a JPG, PNG, GIF, or WEBP file.'
        );
      }
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file && file.type.startsWith('image/')) {
      this.file = file;
      this.fileUrl = URL.createObjectURL(file);
      this.uploadFile(); // Automatically start the upload when dropped
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  uploadFile() {
    if (this.file) {
      this.uploading = true;
    }
  }
}
