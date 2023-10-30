import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomailerComponent } from './infomailer.component';

describe('InfomailerComponent', () => {
  let component: InfomailerComponent;
  let fixture: ComponentFixture<InfomailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfomailerComponent]
    });
    fixture = TestBed.createComponent(InfomailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
