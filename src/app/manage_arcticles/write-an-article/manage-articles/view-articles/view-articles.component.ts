import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-articles',
  templateUrl: './view-articles.component.html',
  styleUrls: ['./view-articles.component.css'],
})
export class ViewArticlesComponent {
  ARTICLE_DATA = [
    {
      articletId: 1,
      imgUrl: '',
      title: 'account and legal firms',
      arcticles:
        'very utility class in Tailwind can be very utility class in Tailwind can be very utility class in Tailwind can be very utility class in Tailwind can be',
      published_date: '06/11/2023',
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      const clientId = params['id'];
      // Do something with clientId
      console.log(clientId);
    });
  }

  back() {
    this.router.navigate(['manage_content/manage_article']);
  }
}
