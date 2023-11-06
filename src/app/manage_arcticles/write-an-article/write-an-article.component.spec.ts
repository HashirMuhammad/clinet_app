import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAnArticleComponent } from './write-an-article.component';

describe('WriteAnArticleComponent', () => {
  let component: WriteAnArticleComponent;
  let fixture: ComponentFixture<WriteAnArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WriteAnArticleComponent]
    });
    fixture = TestBed.createComponent(WriteAnArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
