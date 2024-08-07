import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Haptics, ImpactStyle} from "@capacitor/haptics";

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent {
  @Input() feedItem: any = {};
  @Output() gotoDrink: EventEmitter<any> = new EventEmitter<any>();

  emitGotoDrink(): void {
    this.gotoDrink.emit(this.feedItem.idDrink);
  }

  async emitLike(event: Event) {
    event.stopPropagation();
    await Haptics.impact({style: ImpactStyle.Medium})
    console.log('Like clicked');
  }

  emitComment(event: Event) {
    event.stopPropagation();
    console.log('Comment clicked');

  }
}
