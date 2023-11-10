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
  detailreceivedValue: string = '';


  receiveValue(value: string) {
    console.log("receiveValue");
    this.receivedValue = value;
    if(this.receivedValue === 'false'){
      console.log(this.receivedValue);
      this.art = '';
      this.aireceivedValue = '';
      this.detailreceivedValue = '';
      console.log(this.art)
    }
  }

  aireceiveValue(value: string) {
    console.log("aireceiveValue");
    this.aireceivedValue = value;
    if(this.aireceivedValue === 'ai_art'){
      console.log(this.aireceivedValue);
      this.art = '';
      this.receivedValue = '';
      this.detailreceivedValue = '';
      console.log(this.art)
    }
  }

  detailreceiveValue(value: string) {
    console.log("detailreceiveValue")
    this.detailreceivedValue = value;
    if(this.detailreceivedValue === 'false'){
      console.log(this.detailreceivedValue);
      this.art = '';
      this.receivedValue = '';
      this.aireceivedValue = '';
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
