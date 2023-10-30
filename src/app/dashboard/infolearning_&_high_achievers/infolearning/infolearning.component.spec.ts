import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfolearningComponent } from './infolearning.component';

describe('InfolearningComponent', () => {
  let component: InfolearningComponent;
  let fixture: ComponentFixture<InfolearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfolearningComponent]
    });
    fixture = TestBed.createComponent(InfolearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
