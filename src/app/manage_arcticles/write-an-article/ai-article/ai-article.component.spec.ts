import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiArticleComponent } from './ai-article.component';

describe('AiArticleComponent', () => {
  let component: AiArticleComponent;
  let fixture: ComponentFixture<AiArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiArticleComponent]
    });
    fixture = TestBed.createComponent(AiArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
