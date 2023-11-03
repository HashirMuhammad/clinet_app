import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubUsersComponent } from './unsub-users.component';

describe('UnsubUsersComponent', () => {
  let component: UnsubUsersComponent;
  let fixture: ComponentFixture<UnsubUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnsubUsersComponent]
    });
    fixture = TestBed.createComponent(UnsubUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
