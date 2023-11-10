import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.css']
})
export class ArticlesDetailsComponent {
  selectedOption: string = 'alwaysfeature';
  selectedOptionDate: string = 'pushAfter2Hrs';
  @Output() detailvalueEmitter = new EventEmitter<string>();


   // changing component 
   routToArtiPreview(){
    const detailvalueToSend = 'false';
    this.detailvalueEmitter.emit(detailvalueToSend);
  }
}
