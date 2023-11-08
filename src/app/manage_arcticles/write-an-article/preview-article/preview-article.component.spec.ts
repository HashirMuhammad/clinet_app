import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewArticleComponent } from './preview-article.component';

describe('PreviewArticleComponent', () => {
  let component: PreviewArticleComponent;
  let fixture: ComponentFixture<PreviewArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewArticleComponent]
    });
    fixture = TestBed.createComponent(PreviewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
