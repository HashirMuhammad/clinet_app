import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleArticleComponent } from './simple-article.component';

describe('SimpleArticleComponent', () => {
  let component: SimpleArticleComponent;
  let fixture: ComponentFixture<SimpleArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleArticleComponent]
    });
    fixture = TestBed.createComponent(SimpleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
