import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ai-article',
  templateUrl: './ai-article.component.html',
  styleUrls: ['./ai-article.component.css']
})
export class AiArticleComponent {
// editor value 
public value: string = '../../../assets/manage_content/pic.png';
@Output() aivalueEmitter = new EventEmitter<string>();


  routToArtiDetail(){
    const aivalueToSend = 'ai_art';
    this.aivalueEmitter.emit(aivalueToSend);
  }

}
