import { Component } from '@angular/core';

@Component({
  selector: 'app-write-an-article',
  templateUrl: './write-an-article.component.html',
  styleUrls: ['./write-an-article.component.css']
})
export class WriteAnArticleComponent {
  toogle =true;
  selectedOption: string = 'writeArticle';
  art = '';
  receivedValue: string = '';
  aireceivedValue: string = '';


  receiveValue(value: string) {
    this.receivedValue = value;
    if(this.receivedValue === 'false'){
      console.log(this.receivedValue);
      this.art = '';
      console.log(this.art)
    }
  }

  aireceiveValue(value: string) {
    this.aireceivedValue = value;
    if(this.aireceivedValue === 'false'){
      console.log(this.aireceivedValue);
      this.art = '';
      console.log(this.art)
    }
  }

  onCancelClick(){
    this,this.selectedOption = '';
    this.toogle = true;
  }
  onNextClick() {
    this.art = this.selectedOption;
    console.log('Selected Option:', this.selectedOption);
    if(this,this.selectedOption == ''){
      this.toogle = true;
    } else {
      this.toogle = false;
    }
    // Add any additional logic you want to perform when "Next" is clicked
  }
}
