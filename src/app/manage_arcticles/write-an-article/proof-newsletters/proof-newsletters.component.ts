import { Component } from '@angular/core';


interface Article {
  articleId: number;
  imgUrl: string;
  arcticles: string;
}


@Component({
  selector: 'app-proof-newsletters',
  templateUrl: './proof-newsletters.component.html',
  styleUrls: ['./proof-newsletters.component.css']
})
export class ProofNewslettersComponent {
  selectedOption: string = 'Step2';
  ProfileId = [
    {profileid:1},
    {profileid:2},
    {profileid:3},
    {profileid:4},
    {profileid:5},
    {profileid:6},
    {profileid:7},
    {profileid:8},
    {profileid:9},
    {profileid:10},
    {profileid:11},
    {profileid:12},
    {profileid:13},
    {profileid:14},
    {profileid:15},
  ]
  Articles: Article[] = [
    { articleId: 1, imgUrl: '../../../../assets/history/Avatar.png', arcticles: 'very utility class in Tailwind can be ',  },
    { articleId: 2, imgUrl: '../../../../assets/history/Avatar.png', arcticles: 'Here’s a simple example of a marketing', },
    { articleId: 3, imgUrl: '../../../../assets/history/Avatar.png', arcticles: 'very utility class in Tailwind can be', },
    { articleId: 4, imgUrl: '../../../../assets/history/Avatar.png', arcticles: 'Here’s a simple example of a marketing', },
    { articleId: 5, imgUrl: '../../../../assets/history/Avatar.png', arcticles: 'very utility class in Tailwind can be', },
    { articleId: 6, imgUrl: '../../../../assets/history/Avatar.png', arcticles: 'Here’s a simple example of a marketing', },
    { articleId: 7, imgUrl: '../../../../assets/history/Avatar.png', arcticles: 'Here’s a simple example of a marketing', },
    { articleId: 8, imgUrl: '../../../../assets/history/Avatar.png', arcticles: 'Here’s a simple example of a marketing', },
    { articleId: 9, imgUrl: '../../../../assets/history/Avatar.png', arcticles: 'very utility class in Tailwind can be', },
      // Add more client data as needed
    ];

    includeList: Article[] = [];
    excludeList: Article[] = [];
    // Articles: Article[] = [/* Your articles data here */];

    constructor(){
      this.includeList = this.Articles;
    }
    
    
    
    moveToExcludeList(article: Article) {
      // Remove from includeList
      this.includeList = this.includeList.filter(a => a !== article);
  
      // Add to excludeList
      this.excludeList.push(article);
    }
  
    moveToIncludeList(article: Article) {
      // Remove from excludeList
      this.excludeList = this.excludeList.filter(a => a !== article);
  
      // Add to includeList
      this.includeList.push(article);
    }


  setActive(buttonNumber: string) {
    this.selectedOption = buttonNumber;
  }

  // step 2 
  onCheckboxChange(articleId: number, profileId: number) {
    console.log(`Checkbox for Article ID ${articleId} and Profile ID ${profileId} is selected.`);
  }
}
