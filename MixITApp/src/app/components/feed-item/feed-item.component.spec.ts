import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedItemComponent } from './feed-item.component';

describe('FeedItemComponent', () => {
  let component: FeedItemComponent;
  let fixture: ComponentFixture<FeedItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedItemComponent]
    });
    fixture = TestBed.createComponent(FeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
