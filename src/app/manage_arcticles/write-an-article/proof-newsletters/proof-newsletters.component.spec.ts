import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofNewslettersComponent } from './proof-newsletters.component';

describe('ProofNewslettersComponent', () => {
  let component: ProofNewslettersComponent;
  let fixture: ComponentFixture<ProofNewslettersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProofNewslettersComponent]
    });
    fixture = TestBed.createComponent(ProofNewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
