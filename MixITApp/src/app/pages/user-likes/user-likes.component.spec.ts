import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLikesComponent } from './user-likes.component';

describe('UserLikesComponent', () => {
  let component: UserLikesComponent;
  let fixture: ComponentFixture<UserLikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLikesComponent]
    });
    fixture = TestBed.createComponent(UserLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
