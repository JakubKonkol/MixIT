import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IngredientObj} from "../../model/IngredientObj";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-ingredient-view',
  templateUrl: './ingredient-view.component.html',
  styleUrls: ['./ingredient-view.component.css'],
  animations: [
    trigger('dialog', [
      state('void', style({
        transform: 'translateY(20px)',
        opacity: 0
      })),
      state('enter', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => enter', animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
      transition('enter => void', animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ])
  ]
})
export class IngredientViewComponent implements OnInit{
  @Output() close = new EventEmitter<void>();
  @Input() ingredient!: IngredientObj
  state = 'enter'

  onClose() {
    this.state = 'void';
    this.close.emit()
  }
  getUrl(){
    return this.ingredient.imageURL?.replace("www.", "https://");
  }

  ngOnInit(): void {

  }
}
