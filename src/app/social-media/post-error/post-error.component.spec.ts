import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostErrorComponent } from './post-error.component';

describe('PostErrorComponent', () => {
  let component: PostErrorComponent;
  let fixture: ComponentFixture<PostErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostErrorComponent]
    });
    fixture = TestBed.createComponent(PostErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
