import { TestBed } from '@angular/core/testing';

import { ArticleDataServiceService } from './article-data-service.service';

describe('ArticleDataServiceService', () => {
  let service: ArticleDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
