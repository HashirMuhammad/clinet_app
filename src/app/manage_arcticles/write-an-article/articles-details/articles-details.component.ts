import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.css'],
})
export class ArticlesDetailsComponent {
  // profiling inputs
  employeeNewsletterInput!: string;
  monthlyNewsletterInput!: string;
  printedNewsletterInput!: string;
  includeInInput: string = '';
  categoryInput: string = '';
  profilingInput: string = '';
  customerProfilesInput: string = '';
  // newsfeed inputs
  newsfeedInput!: string;
  featureThisArticleInput!: string;
  selectedOption: string = 'alwaysfeature';
  public value: Date = new Date();
  // social media inputs
  socaialMediaInput!: string;
  socaialMediaTitleInput!: string;
  hashtagsInput!: string;
  OptionDate: string = 'pushAfter2Hrs';
  public valuesocial: Date = new Date();
  hourInput: string = '';
  minuteInput: string = '';
  linkedinInput!: string;

  @Output() detailvalueEmitter = new EventEmitter<string>();

  discard() {
    this.employeeNewsletterInput = '';
    this.monthlyNewsletterInput = '';
    this.printedNewsletterInput = '';
    this.includeInInput = '';
    this.categoryInput = '';
    this.profilingInput = '';
    this.customerProfilesInput = '';
    this.newsfeedInput = '';
    this.featureThisArticleInput = '';
    this.selectedOption = 'alwaysfeature';
    this.value = new Date();
    this.socaialMediaInput = '';
    this.socaialMediaTitleInput = '';
    this.hashtagsInput = '';
    this.OptionDate = 'pushAfter2Hrs';
    this.valuesocial = new Date();
    this.hourInput = '';
    this.minuteInput = '';
    this.linkedinInput = '';
  }

  // changing component
  routToArtiPreview() {
    const detailvalueToSend = 'false';
    this.detailvalueEmitter.emit(detailvalueToSend);
  }
}
