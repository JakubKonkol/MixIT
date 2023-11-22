import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {PublicIngredientsService} from "../../service/PublicIngredientsService";
import {DrinkBuilderConfigurationFactoryService} from "../../service/DrinkBuilderConfigurationFactoryService";
import {HotToastService} from "@ngneat/hot-toast";

@Component({
  selector: 'app-drink-builder',
  templateUrl: './drink-builder.component.html',
  styleUrls: ['./drink-builder.component.css']
})
export class DrinkBuilderComponent implements OnInit{
  constructor(
    private publicIngredientsService: PublicIngredientsService,
    private drinkBuilderConfigurationFactoryService: DrinkBuilderConfigurationFactoryService,
    private viewContainerRef: ViewContainerRef,
    private toast: HotToastService
              ){
    this.drinkBuilderConfigurationFactoryService.setRootViewContainerRef(this.viewContainerRef);
  }
  ingredients: String[] = [];
  filteredIngredients: String[] = [];
  searchPhrase: String = "";
  selectedIngredients: String[] = [];
  ngOnInit(): void {
    this.publicIngredientsService.getAllIngredientsNames().then((ingredients) => {
      this.ingredients = ingredients;
      this.ingredients = this.removeDuplicateIngredients(this.ingredients);
      this.filteredIngredients = ingredients;
    }).catch((error) => {
      console.log(error);
    });
  }
  removeDuplicateIngredients(ingredients: String[]): String[] {
    return ingredients.filter((ingredient, index) => ingredients.indexOf(ingredient) === index);
  }
  handleIngredientClick(ingredient: String) {
    this.searchPhrase = "";
    if (this.selectedIngredients.includes(ingredient)) {
      this.selectedIngredients = this.selectedIngredients.filter((selectedIngredient) => selectedIngredient !== ingredient);
    } else {
      this.selectedIngredients.push(ingredient);
    }
  }

  filterIngredientsByPhrase() {
    this.filteredIngredients = this.ingredients.filter((ingredient) => ingredient.toLowerCase().includes(this.searchPhrase.toLowerCase()));
  }
  initializeDrinkBuilderConfigurationView(){
    if(this.selectedIngredients.length === 0){
      this.toast.error("Please select at least one ingredient");
      return;
    }
    const componentRef = this.drinkBuilderConfigurationFactoryService.addDynamicComponent(this.selectedIngredients);

    componentRef.instance.close.subscribe(() => {
      this.drinkBuilderConfigurationFactoryService.removeDynamicComponent(componentRef)
    });
  }
}
