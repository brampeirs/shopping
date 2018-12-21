import { Component, OnChanges, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnChanges {
  public ingredients: Array<Ingredient> = [
    new Ingredient('Tomato', 2),
    new Ingredient('Potatoes', 4)
  ];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  ingredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
